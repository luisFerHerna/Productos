import Image from 'next/image';
import { GiShoppingCart } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { ElementoLateral } from './ElementoLateral';
import { FaShoppingBag } from "react-icons/fa";

import { MdDescription } from "react-icons/md";

import path from 'path';

const elementos =[
    {
        path: "/bodega/productos",
        titulo: "Productos",
        subtitulo: "Lista de productos",
        icono: <FaShoppingBag />

    },
    {
        path: "/bodega/descripcion",
        titulo: "Descripcion",
        subtitulo: "Descripcion del producto",
        icono: <MdDescription />


    },
    {
        path: "/bodega/carrito",
        titulo: "Carrito",
        subtitulo: "Carrito de compras",
        icono: <GiShoppingCart />
    },{
        path: "/bodega/acerca",
        titulo: "Acerca de",
        subtitulo: "Acerca de nosotros",
        icono: <FcAbout />
    }
];

export const MenuLateral = () => {
    return (

        <div id="menu" className="bg-emerald-600 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    El campeón de los precios altos 
                    </h1>
            </div>
            <span>
                <Image
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mx-auto"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d41fd84-f41d-4d61-a773-7230f95ae95d/dhe2ymc-6bf192b0-da00-4582-8f18-6c0c63eb4d80.png/v1/fit/w_828,h_1072/mama_lucha_by_paperoe_dhe2ymc-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NyIsInBhdGgiOiJcL2ZcLzNkNDFmZDg0LWY0MWQtNGQ2MS1hNzczLTcyMzBmOTVhZTk1ZFwvZGhlMnltYy02YmYxOTJiMC1kYTAwLTQ1ODItOGYxOC02YzBjNjNlYjRkODAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f_V3ojY3g0No6t2cHb4xGfLHaRxl0-7dQKFhYLYpkjc"
                    alt="" />
                </span>
            <div id="profile" className="px-6 py-10">
                <p className="text-white">Bodega No Aurrera</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://cdn-icons-png.freepik.com/256/6009/6009864.png?semt=ais_hybrid"
                            alt="" />
                    </span>
                    <span className="text-white text-sm md:text-base font-bold">
                       Cliente
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    elementos.map(
                        elem => 
                            <ElementoLateral
                                    key={elem.path}
                                    path={elem.path}
                                    icon={elem.icono}
                                    title ={elem.titulo}
                                    subtitle = {elem.subtitulo}
                            />                            
                    )

                }

            </div>
        </div>
    );
}


// npm i react-icons
// https://react-icons.github.io/react-icons/
// https://react-icons.github.io/react-icons/search/#q=disk
