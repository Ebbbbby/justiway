import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsSendFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-[#222] hidden md:block">
      <div className="py-2 container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <span>
            <BsSendFill className="text-2xl text-[#FFdf01]" />
          </span>
          <div className="leading-4 ml-2">
            <p className="text-sm">Email:</p>
            <p className="text-[#FFdf01]">justiwaytours@gmail.com</p>
          </div>
        </div>
        <div className="divide divide-gray-400" />

        <div className="flex items-center">
          <p className="mr-1 text-sm">Hurry Up For your new Tour! </p>{" "}
          <Link href="/tour" className="underline text-[#FFdf01]">
            Book your tour
          </Link>
        </div>
        <div className="divide divide-gray-400" />
        <div className="flex items-center">
          <p className="ml-2 text-sm">Follow us on:</p>
          <Link href="https://www.facebook.com/justiwaytours/">
            <span className="block border rounded-full p-1 mx-2 hover:bg-[#FFdf01] transition-all duration-500 hover:border-transparent">
              <BiLogoFacebook />
            </span>
          </Link>
          <Link href="https://www.instagram.com/justiway_tours/">
            <span className="block border rounded-full p-1 hover:bg-[#FFdf01] transition-all duration-500 hover:border-transparent">
              <BsInstagram />
            </span>
          </Link>

          <div />
        </div>
      </div>
    </header>
  );
};

export default Header;
