import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full px-16 bg-[#005A87] flex h-20 flex-row items-center justify-between">
      <Image width={100} height={100} alt="logo" src="/logo-yellow.png" />
      <div className="flex flex-row text-yellow-500 font-bold text-xl gap-4">
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
