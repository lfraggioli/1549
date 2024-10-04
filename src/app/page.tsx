import Image from "next/image";
import "./globals.css";
import Clients from "./components/clients";
import Products from "./components/products";
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-5 bg-gradient-to-b from-[#fafafa] to-[#fcf1ed] text-black items-center mx-auto justify-center">
      <Hero />

      <About />
      <Clients />
      <Products />
      <Contact />
    </main>
  );
}
