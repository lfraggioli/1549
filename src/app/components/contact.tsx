import Link from "next/link";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@nextui-org/button";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contact = () => {
  return (
    <div
      id="contacto"
      className="flex flex-col gap-10 py-10 w-full justify-center mx-auto"
    >
      <div className="flex flex-col gap-4 items-center mx-auto">
        <h1 className="text-gray-800 font-black text-4xl">Contactanos 👇🏻</h1>
        <div className="flex flex-row justify-center mx-auto items-center gap-2">
          <Link
            href="https://wa.me/5491132293667?text=Hola!%20me%20interesa%20ponerme%20en%20contacto%20por%20consultas%20de%20uniformes"
            target="_blank"
          >
            <Button size="lg" isIconOnly className="bg-[#25D366] rounded-lg">
              <WhatsAppIcon className="text-white h-12 w-12" />
            </Button>
          </Link>

          <h2 className="text-xl">Escribinos por WhatsApp 😉</h2>
        </div>
        {/* <div className="flex flex-row  justify-center mx-auto items-center gap-2">
          <Link href="mailto:fraggioli.lucas@gmail.com" target="_blank">
            <Button size="lg" isIconOnly className="bg-[#c75652] rounded-lg">
              <EmailIcon className="text-white  p-1 h-12 w-12" />
            </Button>
          </Link>

          <h2 className="text-xl">o por Mail</h2>
        </div> */}
        <div className="flex flex-col gap-4 justify-center mx-auto items-center">
          <h2 className="text-xl font-bold">
            ¡Seguinos en nuestras redes sociales!
          </h2>
          <div className="flex flex-row gap-2">
            <Link
              href="https://www.linkedin.com/company/mil549/"
              target="_blank"
            >
              <Button size="lg" isIconOnly className="bg-[#0077b5] rounded-lg">
                <LinkedInIcon className="text-white  h-12 w-12" />
              </Button>
            </Link>
            <Link href="https://www.instagram.com/juanitoijo/" target="_blank">
              <Button
                size="lg"
                isIconOnly
                className="bg-gradient-to-tr from-[#a03ab4] to-[#fd1d1d] rounded-lg"
              >
                <InstagramIcon className="text-white  h-12 w-12" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
