import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "./components/header";
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
      <body style={urbanist.style} className={"flex h-svh flex-col"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
