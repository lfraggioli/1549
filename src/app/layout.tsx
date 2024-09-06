import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "./components/header";
import { Providers } from "./providers";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={urbanist.style}
        className={"flex justify-center mx-auto flex-col"}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
