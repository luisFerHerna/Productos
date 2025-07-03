import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

type Product = {
  id: number;
  name: string;
  price: number | string;
  description: string;
  image_url: string;
  quantity: number;
};

type ProductRow = Product & RowDataPacket;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = parseInt(params.id);
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID de producto no válido' },
        { status: 400 }
      );
    }

    const [rows] = await pool.query<ProductRow[]>(
      'SELECT id, name, price, description, image_url, quantity FROM products WHERE id = ?',
      [productId]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    const product = rows[0];
    
    // Manejo seguro del precio
    let priceValue: number;
    if (typeof product.price === 'string') {
      // Eliminar caracteres no numéricos excepto punto y guión
      const numericString = product.price.replace(/[^0-9.-]/g, '');
      priceValue = parseFloat(numericString);
      
      // Si el parseo falla, establecer a 0
      if (isNaN(priceValue)) {
        priceValue = 0;
      }
    } else if (typeof product.price === 'number') {
      priceValue = product.price;
    } else {
      priceValue = 0;
    }

    const responseProduct = {
      ...product,
      price: priceValue
    };

    return NextResponse.json(responseProduct);
  } catch (error) {
    console.error('Error en GET /api/products/[id]:', error);
    return NextResponse.json(
      { error: 'Error al obtener el producto' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = parseInt(params.id);
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID de producto no válido' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    if (body.quantity === undefined || isNaN(body.quantity)) {
      return NextResponse.json(
        { error: 'Cantidad no válida' },
        { status: 400 }
      );
    }

    await pool.query(
      'UPDATE products SET quantity = ? WHERE id = ?',
      [body.quantity, productId]
    );

    return NextResponse.json(
      { success: true, message: 'Cantidad actualizada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en PUT /api/products/[id]:', error);
    return NextResponse.json(
      { error: 'Error al actualizar el producto' },
      { status: 500 }
    );
  }
}