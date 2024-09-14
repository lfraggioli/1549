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
    <Navbar
      isBordered
      className="bg-[#f3f3ff] border-1 border-slate-300/70 w-full justify-start px-10"
    >
      <NavbarContent className="flex  text-xl w-full justify-start font-semibold sm:flex gap-5">
        <NavbarItem className="">
          <h1 className="text-gray-400 text-left">Mil549 © 2024</h1>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Footer;
