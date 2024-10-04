import Image from "next/image";
import React from "react";

import hero from "../hero.jpg";
const Hero = () => {
  return (
    <section
      id="#inicio"
      className="relative bg-black w-[100vw] h-[60vh] items-center justify-center flex"
    >
      <div className="-z-1 opacity-45">
        <Image
          src={hero}
          alt="portada"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex relative w-full z-20 px-20 flex-col text-center items-center justify-center my-auto">
        <h1 className="text-7xl text-yellow-500 font-bold ">Mil549</h1>
        <h2 className="text-5xl text-slate-50 font-bold ">
          Reducí costos e incrementá calidad confiando en nosotros.
        </h2>
        <h3 className="text-xl font-normal mt-2 text-gray-300">
          Con clientes en las áreas de Gastronomía, Industrial, Sanidad y
          Hotelería.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
