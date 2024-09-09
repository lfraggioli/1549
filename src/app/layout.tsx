import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mil549",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={urbanist.style} className="flex  flex-col">
        <Providers>
          <Header />
          <div className="fixed bottom-24 right-20 z-50 items-center gap-2">
            <Link
              href="https://wa.me/5491132293667?text=Hola!%20me%20interesa%20ponerme%20en%20contacto%20por%20consultas%20de%20uniformes"
              target="_blank"
            >
              <Button
                size="lg"
                isIconOnly
                className="bg-[#25D366] h-16  shadow-large w-16 rounded-full"
              >
                <WhatsAppIcon className="text-white h-10 w-10" />
              </Button>
            </Link>
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
