import Image from "next/image";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Header = () => {
  return (
    <Navbar
      maxWidth="full"
      isBordered
      className="bg-[#f3f3ff]/50 py-6 justify-center mx-auto"
    >
      <NavbarBrand>
        <Image src="/logo-yellow.png" alt="logo" width={180} height={180} />
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="text-4xl text-gray-600 font-semibold sm:flex gap-10"
      >
        <NavbarItem className="hover:font-bold text-xl hover:scale-110 transition-all duration-200">
          <Link color="foreground" href="#inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:font-bold hover:scale-110  text-xl transition-all duration-200">
          <Link color="foreground" href="#productos">
            Nuestros productos
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:font-bold hover:scale-110  text-xl transition-all duration-200">
          <Link href="#nosotros" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>

        <NavbarItem className="hover:font-bold hover:scale-110  text-xl transition-all duration-200">
          <Link color="foreground" href="#contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
