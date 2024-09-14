"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { productData } from "../lib/data";
import { ProductsCarousel } from "./carousel";
const images = [
  {
    name: "img1",
    src: "/assets/img1.jpg",
    description: "Gastronomía",
  },
  {
    name: "img2",
    src: "/assets/img2.jpg",
    description: "Industrial",
  },
  {
    name: "img3",
    src: "/assets/img3.jpg",
    description: "Sanidad",
  },
  {
    name: "img4",
    src: "/assets/img4.jpg",
    description: "Hotelería",
  },
];

export default function Products() {
  return (
    <div className="flex px-16 flex-col h-fit w-full gap-10 my-10 justify-center">
      <div className="flex flex-col w-1/2 gap-2 justify-center mx-auto">
        <h1 className="font-medium text-2xl text-center text-gray-500 justify-center">
          Nos especializamos en las áreas:
        </h1>
      </div>
      <div className="flex flex-row  gap-12 justify-center">
        {images.map((image) => {
          return (
            <div
              key={image.name}
              className="flex flex-col gap-4 hover:-translate-y-2 duration-150 w-1/5 "
            >
              <Image
                className="object-cover rounded-xl"
                key={image.name}
                src={image.src}
                alt={image.name}
                height={300}
              />
              <h3 className="text-center text-4xl text-gray-700 font-bold">
                {image.description}
              </h3>
            </div>
          );
        })}
      </div>
      <div
        id="productos"
        className="flex flex-col mt-8 gap-8 py-8 justify-center"
      >
        <h1 className="text-5xl font-bold mx-auto">Nuestros productos</h1>
        <ProductsCarousel />
      </div>
    </div>
  );
}
