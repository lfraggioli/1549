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
      className="bg-[#f3f3ff]/50 py-2 justify-center mx-auto"
    >
      <NavbarBrand className="py-1">
        <Image src="/logo-yellow.png" alt="logo" width={130} height={100} />
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="text-xl font-semibold sm:flex gap-5"
      >
        <NavbarItem className="hover:font-bold hover:scale-110 transition-all duration-200">
          <Link color="foreground" href="#inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:font-bold hover:scale-110 transition-all duration-200">
          <Link color="foreground" href="#productos">
            Nuestros Productos
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:font-bold hover:scale-110 transition-all duration-200">
          <Link href="#nosotros" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>

        <NavbarItem className="hover:font-bold hover:scale-110 transition-all duration-200">
          <Link color="foreground" href="#contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
