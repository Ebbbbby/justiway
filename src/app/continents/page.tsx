"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { continents } from "../../../data";
const ContinentPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
      {continents.map((continent, index) => (
        <motion.div
          key={continent.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() =>
            router.push(`/continents/${continent.name.toLowerCase()}`)
          }
          className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md min-h-[250px] md:min-h-[300px] hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={continent.image}
            alt={continent.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div> */}

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-2xl font-bold z-10">{continent.name}</h2>
            <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              {continent.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContinentPage;
