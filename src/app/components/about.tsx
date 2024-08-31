import { Image } from "@nextui-org/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10 justify-center mx-auto">
      <h1 className="text-center font-black text-5xl">Nosotros</h1>
      <div className="flex flex-row gap-20 justify-center items-center">
        <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
        <div className="flex text-right justify-end flex-col w-1/4">
          <h1 className="text-5xl font-bold">Somos MIL549</h1>
          <h2 className="text-2xl text-gray-600 font-semibold">
            Transformamos la experiencia de compra de uniformes con calidad de
            producto y de logística.
          </h2>
        </div>
      </div>
      <h1 className="text-3xl text-center font-bold underline">
        ¿Por que elegirnos?
      </h1>
      <div className="flex flex-col justify-between">
        <div className="flex items-center w-1/2 mx-auto flex-row justify-center gap-10 ">
          <h1 className="text-xl font-semibold text-gray-700">
            Somos una empresa joven, comprometida con transformar la experiencia
            de compra de los uniformes para tus colaboradores. Nos enfocamos en
            la excelencia y calidad del producto en cada etapa del proceso.
          </h1>
          <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
        </div>
        <div className="flex items-center w-1/2 mx-auto flex-row justify-center gap-10 ">
          <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
          <h1 className="text-xl text-right font-semibold text-gray-700">
            Contamos con profesionales calificados que atienden las necesidades
            de nuestros clientes y diseñan soluciones a la vanguardia del
            mercado. Nuestro objetivo es hacer que tu compra sea cada vez más
            segura, sencilla y rápida.
          </h1>
        </div>
        <div className="flex items-center w-1/2 mx-auto flex-row justify-center gap-10 ">
          <h1 className="text-xl font-semibold text-gray-700">
            Que tu compra sea cada vez más segura, simple y rápido. Somos
            conscientes de la necesidad de mejorar la experiencia del cliente,
            constantemente, sin perder calidad.
          </h1>
          <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
        </div>
        <div className="flex items-center w-1/2 mx-auto flex-row justify-center gap-10 ">
          <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
          <h1 className="text-xl text-right font-semibold text-gray-700">
            El ahorro, es lo más importante a la hora elegirnos, puedes comprar
            las 24 horas los 7 días de la semana, nuestra estructura nos permite
            poder brindarte la mejor calidad junto al mejor precio en
            comparación con cualquier tienda física existente.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
