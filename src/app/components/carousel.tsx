import * as React from "react";

import "react-multi-carousel/lib/styles.css";
import { Image } from "@nextui-org/image";
import { productData } from "../lib/data";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export function ProductsCarousel() {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const autoPlay = Autoplay({
    playOnInit: true,
    delay: 2500,
  });
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <Carousel
        setApi={setEmblaApi}
        plugins={[autoPlay]}
        className="w-full h-full"
      >
        <CarouselContent className="w-full flex gap-2 mb-2">
          {productData.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/4 lg:basis-1/5">
              <Card
                isPressable
                isHoverable
                className="py-4 w-[300px] shadow-none hover:scale-105  h-[400px]"
              >
                <CardHeader className="px-4 flex-col items-center justify-center">
                  <h4 className="font-medium w-11/12 truncate hover:w-full text-lg text-center">
                    {item.name}
                  </h4>
                </CardHeader>
                <CardBody className="overflow-visible flex flex-col justify-center items-center mx-auto px-2">
                  <Image
                    src={item.src}
                    className="object-cover rounded-xl"
                    height={320}
                    alt={item.name}
                  />
                </CardBody>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="mt-5" />
        <CarouselNext className="mt-5" />
      </Carousel>
    </div>
  );
}
