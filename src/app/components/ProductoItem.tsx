"use client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number | string;
  image_url: string;
}

export default function ProductoItem({ product }: { product: Product }) {
  const price = typeof product.price === 'string' 
    ? parseFloat(product.price.replace(/[^0-9.-]/g, '')) 
    : product.price;

  const imageUrl = product.image_url?.startsWith('http') 
    ? product.image_url 
    : "/placeholder-product.jpg";

  return (
    <div className="flex flex-col h-full">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <Image
            src={imageUrl}
            alt={product.name || "Producto sin nombre"}
            className="w-full h-full object-cover"
            width={400}
            height={400}
            priority={false}
          />
        </div>
        <div className="p-6 flex-grow">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {product.name || "Producto sin nombre"}
          </h5>
          <p className="block font-sans text-base font-bold leading-relaxed text-inherit antialiased">
            ${!isNaN(price) ? price.toFixed(2) : "0.00"}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link href={`/bodega/descripcion/${product.id}`}>
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}