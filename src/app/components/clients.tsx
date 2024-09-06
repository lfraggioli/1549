"use client";
import { Image } from "@nextui-org/image";
import { divider } from "@nextui-org/theme";
import React from "react";

const dataClientes = [
  {
    id: 1,
    name: "Shell",
    image: "/assets/Shell-Logo.png",
  },
  {
    id: 5,
    name: "Emirates Petroleum",
    image: "/assets/emirates.png",
  },
  {
    id: 6,
    name: "Wendys",
    image: "/assets/wendys.png",
  },
  {
    id: 2,
    name: "Gobierno de Tierra del Fuego",
    image: "/assets/gtdf-logo.png",
  },
  {
    id: 8,
    name: "Aluar",
    image: "/assets/aluar.png",
  },
  {
    id: 3,
    name: "AI Metal",
    image: "/assets/aimetal2.png",
  },
  {
    id: 4,
    name: "INSUMED",
    image: "/assets/insumed.jpg",
  },

  {
    id: 7,
    name: "Brinks",
    image: "/assets/brinks.png",
  },
];
const Clients = () => {
  return (
    <section className="flex flex-col w-full  bg-white justify-center">
      <h2 className="text-2xl font-normal text-center mt-5 text-gray-500">
        Confían en nosotros
      </h2>
      <div className="flex flex-row justify-center gap-3">
        {dataClientes.map((client) => {
          return (
            <div
              key={client.id}
              className="py-2 px-2 h-100 w-100 justify-center my-auto rounded-lg items-center"
            >
              {client.name === "Gobierno de Tierra del Fuego" ? (
                <Image src={client.image} alt="logo" width={160} />
              ) : (
                <Image src={client.image} alt="logo" width={100} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
