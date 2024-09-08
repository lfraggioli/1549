import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { aboutData } from "../lib/dataAbout";
const About = () => {
  return (
    <div
      id="nosotros"
      className="flex py-16 flex-col bg-gradient-to-b from-slate-50 to-slate-50/10 gap-4 justify-center mx-auto"
    >
      <h1 className="text-center -mb-16 font-black text-5xl">Nosotros</h1>
      <div className="flex flex-row gap-5 justify-center items-center">
        <Image src="/assets/logo-yellow-label.png" alt="logo" width={500} />
        <div className="flex text-right justify-end flex-col w-1/4">
          <h1 className="text-4xl font-bold">Somos MIL549</h1>
          <h2 className="text-xl text-gray-500 font-medium">
            Somos una empresa joven, comprometidos con transformar la
            experiencia de compra de uniformes para tus colaboradores.
          </h2>
        </div>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        ¿Por que elegirnos?
      </h1>
      <div className="flex flex-row justify-center gap-10">
        {aboutData.map((about) => {
          return (
            <Card
              isBlurred
              isHoverable
              key={about.id}
              className="flex flex-col py-4 w-1/5"
            >
              <CardBody className="flex flex-col gap-4 px-4 my-auto py-2 justify-center items-center mx-auto">
                <Image
                  className="object-cover"
                  src={about.src}
                  alt={about.src}
                  width={240}
                  height={165}
                />
                <h3 className="text-center text-medium text-gray-700">
                  {about.description}
                </h3>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default About;
