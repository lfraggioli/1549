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

const Footer = () => {
  return (
    <Navbar isBordered>
      <NavbarContent
        justify="start"
        className="text-xl font-semibold sm:flex gap-5"
      >
        <NavbarItem>
          <h1 className="text-gray-700">Mil549 © 2024</h1>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Footer;
