"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../bodega/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number | string;
  description: string;
  image_url: string;
  quantity: number;
}

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const price = typeof product.price === "string"
    ? parseFloat(product.price.replace(/[^0-9.-]/g, ""))
    : product.price;

  const imageUrl = product.image_url?.startsWith("http")
    ? product.image_url
    : "/placeholder-product.jpg";

  const handleAddToCart = async () => {
    if (count <= 0) {
      setError("Debes seleccionar al menos un producto.");
      return;
    }

    try {
      await addToCart({
        id: product.id,
        name: product.name,
        price: price,
        description: product.description,
        image_url: product.image_url,
        quantity: product.quantity
      }, count);
      
      setError(null);
      router.push("/bodega/carrito");
    } catch (error: any) {
      setError(error.message || "Error al agregar al carrito");
      setTimeout(() => setError(null), 3000);
    }
  };

  const increment = () => count < product.quantity && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={product.name}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-800 mb-6">
            ${!isNaN(price) ? price.toFixed(2) : "0.00"}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <p className="text-sm text-gray-500 mb-4">Disponibles: {product.quantity}</p>

          <div className="flex items-center mb-6">
            <button
              onClick={decrement}
              disabled={count <= 1}
              className="px-4 py-2 bg-gray-200 rounded-l-lg disabled:opacity-50"
            >
              -
            </button>
            <span className="px-6 py-2 bg-gray-100 text-center">{count}</span>
            <button
              onClick={increment}
              disabled={count >= product.quantity}
              className="px-4 py-2 bg-gray-200 rounded-r-lg disabled:opacity-50"
            >
              +
            </button>
          </div>

          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={count <= 0}
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Agregar al carrito
          </button>

          <Link
            href="/bodega/productos"
            className="block mt-4 text-center text-blue-500 hover:underline"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}