"use client";
import { useCart } from "@/app/bodega/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    checkout
  } = useCart();
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const success = await checkout();
      if (success) {
        setIsCheckoutSuccess(true);
        setTimeout(() => setIsCheckoutSuccess(false), 3000);
      } else {
        setErrorMessage("Hubo un problema al procesar tu compra. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setErrorMessage("Error al procesar la compra. Verifica la cantidad disponible.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateQuantity = async (productId: number, newQuantity: number) => {
    try {
      await updateQuantity(productId, newQuantity);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Error al actualizar cantidad");
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  if (isCheckoutSuccess) {
    return (
      <div className="w-full min-h-screen p-4 flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">¡Compra exitosa!</h2>
          <p className="mb-4">Gracias por tu compra. Tu pedido ha sido procesado.</p>
          <Link
            href="/bodega/productos"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && !isCheckoutSuccess) {
    return (
      <div className="w-full min-h-screen p-4 flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="mb-4">Agrega algunos productos para continuar.</p>
          <Link
            href="/bodega/productos"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Tu Carrito ({totalItems} items)</h1>
        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {cart.map((item) => (
            <div key={item.productId} className="flex flex-col md:flex-row gap-4 py-4 border-b">
              <div className="w-full md:w-1/4">
                <div className="relative h-32 w-32">
                  <Image
                    src={item.image_url || "/placeholder-product.jpg"}
                    alt={item.name}
                    className="object-cover rounded"
                    fill
                    priority={false}
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} c/u</p>
                <p className="text-sm text-gray-500">Disponible: {item.availableQuantity}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={item.quantity >= item.availableQuantity}
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
              
              <div className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Total:</h3>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-end gap-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Vaciar carrito
            </button>
            
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50"
            >
              {isLoading ? 'Procesando...' : 'Comprar ahora'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}