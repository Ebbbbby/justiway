"use client";

import OurStory from "@/ourstory/OurStory";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div>
      <div className="relative text-white">
        <motion.div
          className="h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/collage.jpg"
            alt="About Us"
            width={1500}
            height={100}
            className="w-full h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <p className="text-sm text-gray-200">
              <Link
                href="/"
                className="font-bold hover:underline text-gray-300 "
              >
                Home
              </Link>
              <span className="mx-2 font-bold">{">"}</span>
              <span className="text-[#2137fc] font-bold">About Us</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div>
        <OurStory />
      </div>
    </div>
  );
}
