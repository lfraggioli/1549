import Image from "next/image";
import "./globals.css";
import portada from "./public/assets/portada.jpg";
import Clients from "./components/clients";

export default function Home() {
  return (
    <main className="flex flex-col px-16 bg-[#fafafa] items-center mx-auto justify-center">
      <div className="flex flex-row h-fit items-center py-16">
        <div className="flex  w-3/5 px-20 flex-col text-black py-4 mt-3">
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
    </main>
  );
}
