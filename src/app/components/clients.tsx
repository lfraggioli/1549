"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardBody } from "@nextui-org/card";
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
    id: 2,
    name: "Emirates Petroleum",
    image: "/assets/emirates.png",
  },
  {
    id: 3,
    name: "Wendys",
    image: "/assets/wendys.png",
  },

  {
    id: 9,
    name: "YPF",
    image: "/assets/YPF.png",
  },
  {
    id: 5,
    name: "Aluar",
    image: "/assets/aluar.png",
  },
  {
    id: 6,
    name: "AI Metal",
    image: "/assets/aimetal2.png",
  },
  {
    id: 4,
    name: "Gobierno de Tierra del Fuego",
    image: "/assets/gtdf-logo.png",
  },
  {
    id: 7,
    name: "INSUMED",
    image: "/assets/insumed.jpg",
  },

  {
    id: 8,
    name: "Brinks",
    image: "/assets/brinks.png",
  },
  {
    id: 1,
    name: "Shell",
    image: "/assets/Shell-Logo.png",
  },
  {
    id: 9,
    name: "YPF",
    image: "/assets/YPF.png",
  },
  {
    id: 3,
    name: "Wendys",
    image: "/assets/wendys.png",
  },
  {
    id: 4,
    name: "Gobierno de Tierra del Fuego",
    image: "/assets/gtdf-logo.png",
  },
];

const Clients = () => {
  return (
    <div className="flex py-10 gap-5 flex-col w-full  mx-auto -mt-8 border-1 border-gray-500/20  bg-white shadow-sm justify-center">
      <h2 className="text-2xl font-medium text-center text-gray-500">
        Confían en nosotros
      </h2>
      <Carousel
        className="w-full flex  mx-auto justify-center gap-5"
        opts={{
          align: "center",
          loop: true,
          duration: 500,
        }}
      >
        <CarouselContent className="w-11/12">
          {dataClientes.map((client, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/12 my-auto items-center"
              >
                <Card className="py-4 shadow-none  h-120 w-120 ">
                  <CardBody className="overflow-visible flex flex-col justify-center items-center mx-auto px-2">
                    {client.name === "Gobierno de Tierra del Fuego" ? (
                      <Image
                        className="object-cover rounded-md"
                        src={client.image}
                        alt="logo"
                        width={150}
                      />
                    ) : (
                      <Image
                        src={client.image}
                        className="object-cover rounded-md"
                        alt="logo"
                        width={100}
                      />
                    )}
                  </CardBody>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Clients;
