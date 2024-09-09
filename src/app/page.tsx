import Image from "next/image";
import "./globals.css";

import portada from "./public/assets/portada.jpg";
import Clients from "./components/clients";
import Products from "./components/products";
import About from "./components/about";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-5 bg-gradient-to-b from-[#fafafa] to-[#edf0fc] text-black items-center mx-auto justify-center">
      <div className="flex bg-gradient-to-r from-[#fafafa] to-[#c1d8ff] flex-row h-fit px-16 items-center py-24">
        <div className="flex  w-3/5 px-20 flex-col  py-4 mt-3">
          <h1 className="text-6xl font-bold ">
            Reducí costos e incrementá calidad confiando en nosotros.
          </h1>
          <h3 className="text-xl font-normal mt-2 text-gray-700">
            Con clientes en las áreas de Gastronomía, Industrial, Sanidad y
            Hotelería.
          </h3>
        </div>
        <Image
          src="/assets/portada.jpg"
          alt="logo"
          objectFit="contain"
          className="w-1/2 rounded-xl drop-shadow-xl"
          width={800}
          height={800}
        />
      </div>

      <Clients />
      <Products />
      <About />
      <Contact />
    </main>
  );
}
