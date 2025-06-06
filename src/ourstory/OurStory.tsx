"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const OurStory = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      imageRef.current?.getBoundingClientRect() || {};
    const x = ((e.clientX - (left || 0)) / (width || 1)) * 100;
    const y = ((e.clientY - (top || 0)) / (height || 1)) * 100;

    if (imageRef.current) {
      imageRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };
  return (
    <div className="bg">
      <div className="max-w-7xl mx-auto py-14 mt-6 px-4 sm:px-6 lg:px-8 text-[#222]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6">
          <div>
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=""
              >
                <h2 className="text-2xl font-bold">Who We Are</h2>
                <h1 className=" text-[#2137fc] uppercase font-bold text-2xl mb-4 mt-2 underline">
                  Justiway Travel and Tours
                </h1>
                <p className="mb-4">
                  We are a team of passionate individuals dedicated to providing
                  the best services in our field. Our mission is to deliver
                  quality and excellence in everything we doJustiway Tours was
                  founded with a passion for travel and a commitment to
                  providing unforgettable experiences. Our journey began with a
                  simple idea: to connect people with the beauty of the world
                  through personalized tours and adventures. Over the years, we
                  have grown into a trusted name in the travel industry, known
                  for our exceptional service and dedication to customer
                  satisfaction.
                </p>
                <p>
                  We believe that travel is not just about visiting new places,
                  but about creating lasting memories and building connections
                  with people from different cultures. Our team of experienced
                  guides and travel experts work tirelessly to curate unique
                  itineraries that cater to the diverse interests of our
                  clients, ensuring that every trip is a memorable one.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <motion.div
              ref={imageRef}
              className="w-96 overflow-hidden rounded-full transition-transform duration-500 ease-out hover:scale-105 shadow-xl hover:shadow-2xl"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="">
                <Image
                  src="/images/justiway.png"
                  alt="About Us"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
