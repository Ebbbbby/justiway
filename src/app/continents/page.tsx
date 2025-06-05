"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { continents } from "../../../data";
const ContinentPage = () => {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className=" w-fullw-full bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="max-w-5xl mx-auto px-4 py-5 text-center text-[#222]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <h1 className="text-3xl font-bold mb-2 underline">
              Our Destinations
            </h1>
            <p className="text-lg leading-relaxed ">
              Explore the world&apos;s continents with us. Each destination
              offers a unique blend of culture, adventure, and natural beauty.
              Click on any continent to discover more about its wonders and plan
              your next journey.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {continents.map((continent, index) => (
            <motion.div
              key={continent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // onClick={() =>
              //   router.push(`/continents/${continent.name.toLowerCase()}`)
              // }
              onClick={() =>
                router.push(`/continents/${slugify(continent.name)}`)
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
      </div>
    </div>
  );
};

export default ContinentPage;
