import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT id, name, description, CAST(price AS DECIMAL(10,2)) as price, quantity, image_url FROM products WHERE quantity > 0');
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
}