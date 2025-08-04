"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function ToursPage () {
  return (
 
    <motion.div className="relative">
      <div className="h-auto relative">
        <Image
          src="/images/toursimg.jpg"
          alt="About Us"
          width={1500}
          height={100}
          className="w-full h-[80vh] object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl font-bold mb-2">Tour Packages</h1>
          <p className="text-sm text-gray-200">
            <Link href="/" className="font-bold hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <span className="text-[#2137fc] font-bold">Tours</span>
          </p>
        </div>



        {typeof window !== "undefined" && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-0 bg-black/50 text-white p-4 h-full w-[90%] md:w-[35%] text-lg leading-relaxed flex justify-center items-center pl-8 hidden lg:flex"
          >
            At Justiway Travel & Tours, we specialize in crafting unforgettable
            travel experiences tailored uniquely to you. Whether your ideal
            escape involves relaxing on a sun-drenched tropical beach,
            discovering the charm of historic cities, immersing yourself in
            vibrant cultures, or enjoying a romantic getaway with your partner,
            we’ve got you covered. Our tour packages are designed with
            flexibility in mind, carefully customized to match your budget,
            interests, and schedule. With our experienced team handling every
            detail, all you have to do is focus on making lasting memories.
          </motion.div>
        )}
      </div>
    </motion.div>
  );


}