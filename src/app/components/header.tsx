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
    <Navbar className="w-full px-16 bg-[#f5f5f5] flex h-20 flex-row items-center justify-center shadow-large">
      <NavbarBrand>
        <Image src="/logo-yellow.png" alt="logo" width={100} height={100} />
      </NavbarBrand>
      <NavbarContent
        className="text-[#005A87] mx-auto text-xl font-semibold sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nuestros Productos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
