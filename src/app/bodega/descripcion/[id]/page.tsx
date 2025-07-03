'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProductDetail from "@/app/components/ProductDetail";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number | string;
  description: string;
  image_url: string;
  quantity: number;
}

export default function ProductDescriptionPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const id = params.id as string;
        if (!id) {
          throw new Error('ID de producto no proporcionado');
        }

        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data: Product = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocurrió un error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-12">
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">{error}</h2>
          <button 
            onClick={() => router.push('/bodega/productos')}
            className="text-blue-500 hover:underline"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <button 
            onClick={() => router.push('/bodega/productos')}
            className="text-blue-500 hover:underline"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <ProductDetail product={product} />
    </div>
  );
}