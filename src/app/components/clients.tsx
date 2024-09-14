"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { divider } from "@nextui-org/theme";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
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
    name: "YPF",
    image: "/assets/YPF.png",
  },
  {
    id: 7,
    name: "Gobierno de Tierra del Fuego",
    image: "/assets/gtdf-logo.png",
  },

  {
    id: 11,
    name: "swiss medical",
    image: "/assets/swiss.png",
  },
  {
    id: 8,
    name: "INSUMED",
    image: "/assets/insumed.jpg",
  },

  {
    id: 9,
    name: "Brinks",
    image: "/assets/brinks.png",
  },

  {
    id: 12,
    name: "Cisilotto",
    image: "/assets/cisilotto.jpg",
  },
  {
    id: 13,
    name: "Marolio",
    image: "/assets/marolio.png",
  },
];

const Clients = () => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);

  const autoScroll = AutoScroll({
    playOnInit: true,
    startDelay: 300,
    speed: 1.1,
  });

  const onActionComplete = React.useCallback(() => {
    if (autoScroll) {
      autoScroll.play();
    }
  }, [autoScroll]);

  return (
    <div className="flex py-10 gap-5 flex-col w-full  mx-auto -mt-8 border-1 border-gray-500/20  bg-white shadow-sm justify-center">
      <h2 className="text-2xl font-medium text-center text-gray-500">
        Confían en nosotros
      </h2>

      <Carousel
        setApi={setEmblaApi}
        plugins={[autoScroll]}
        opts={{ active: true }}
        className="w-full px-16 mx-auto justify-center "
      >
        <CarouselContent className="w-11/12  mx-auto  items-center">
          {dataClientes.map((client, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-[10%] my-auto items-center"
              >
                <Card className="py-4 shadow-none ">
                  <CardBody className="overflow-visible flex  justify-center items-center  ">
                    {client.name === "Gobierno de Tierra del Fuego" ? (
                      <Image
                        className="object-cover  rounded-md"
                        src={client.image}
                        alt="logo"
                        width={150}
                      />
                    ) : (
                      <Image
                        src={client.image}
                        className="object-cover rounded-md"
                        alt="logo"
                        width={110}
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
