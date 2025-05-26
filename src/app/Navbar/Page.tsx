"use client";
import React, { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/tour", label: "Tour Packages" },
    { href: "/visa", label: "Visa & Immigration" },
    { href: "/study", label: "Study Abroad" },
    { href: "/contact", label: "Contact Us" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm transition-transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-800">
                <Image
                  src="/images/justiway2.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] font-bold transition-all duration-300 ${
                    isActive
                      ? "text-[#2137fc]"
                      : "text-[#222] hover:text-[#2137fc]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>

          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out  ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center border-b border-gray-200 py-2 ">
              <div className="flex-shrink-0 flex items-center mt-4 px-4">
                <span className="ml-2 text-xl font-bold text-gray-800">
                  <Image
                    src="/images/justiway2.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-8 py-6 pt-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[16px] font-bold transition-all duration-300 py-3 ${
                      isActive
                        ? "text-[#2137fc]"
                        : "text-[#222] hover:text-[#2137fc]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-6">
                <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
