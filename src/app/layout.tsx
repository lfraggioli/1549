import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers";
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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
