import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between bg-black xl:px-80 lg:px-40 px-10 text-white">
        <Image width={100} height={50} src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"/>
    </div>
  );
};

export default Navbar;
