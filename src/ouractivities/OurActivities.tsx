"use client";

import { useState } from "react";
import Image from "next/image";
import {activities} from '../../activitiesData'
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

export default function OurActivities() {
  const [selectedActivityId, setSelectedActivityId] = useState(
    activities[0].id
  );
  const selected = activities.find((a) => a.id === selectedActivityId)!;

  console.log(selected)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto text-[#222]">
      {/* Left Column - Activities */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >

        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedActivityId(activity.id)}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all duration-300  shadow-sm
              ${
                selectedActivityId === activity.id
                  ? "bg-yellow-100 border-yellow-500"
                  : "bg-white hover:bg-gray-100"
              }`}
            title={activity.name}
          >
            <Image
              src={activity.icon}
              alt={activity.name}
              width={70}
              height={70}
            />
            <span className="font-bold text-2xl tracking-wide">{activity.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Middle Column - Description */}
      <motion.div
        className="p-4 bg-white shadow rounded-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-2">{selected.name}</h2>
        <p className="text-gray-700">{selected.description}</p>
      </motion.div>

      {/* Right Column - Image Gallery */}
      <motion.div
        className="bg-white rounded-md shadow-md p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 gap-4">
          {selected.images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={img}
                alt={`${selected.name} ${idx + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-48 rounded-md"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3500}
            dynamicHeight={false}
          >
            {selected.images.map((img, idx) => (
              <div key={idx}>
                <Image
                  src={img}
                  alt={`${selected.name} ${idx + 1}`}
                  width={300}
                  height={200}
                  className="object-cover rounded-md h-48 w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}
