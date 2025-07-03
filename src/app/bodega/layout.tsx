import { CartProvider } from './context/CartContext';
import {MenuLateral} from '@/app/components/MenuLateral';

export default function BodegaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex flex-col relative w-screen">
          <MenuLateral />
          <div className='ml-64 p-4 text-slate-800'>
            {children}
          </div>
        </div>
      </div>
    </CartProvider>
  );
}