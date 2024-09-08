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
    <section className="flex py-10 gap-5 flex-col w-11/12 rounded-xl border-1 border-gray-500/20  bg-white shadow-sm justify-center">
      <h2 className="text-2xl font-medium text-center text-gray-500">
        Confían en nosotros
      </h2>
      <div className="flex flex-row justify-center gap-10">
        {dataClientes.map((client) => {
          return (
            <div
              key={client.id}
              className="h-120 w-120 justify-center my-auto items-center"
            >
              {client.name === "Gobierno de Tierra del Fuego" ? (
                <Image
                  className="object-cover"
                  src={client.image}
                  alt="logo"
                  width={160}
                />
              ) : (
                <Image
                  src={client.image}
                  className="object-cover"
                  alt="logo"
                  width={120}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
