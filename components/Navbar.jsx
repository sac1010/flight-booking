import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Link
      href={"/"}
      className="w-full h-10 flex items-center justify-between bg-black xl:px-80 lg:px-40 px-10 text-white"
    >
      <Image
        width={100}
        alt="img"
        height={50}
        src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
      />
    </Link>
  );
};

export default Navbar;
