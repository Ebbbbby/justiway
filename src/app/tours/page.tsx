"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { packages } from "../../../packagesData";
export default function ToursPage () {
  return (
    <>
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
              <Link
                href="/"
                className="font-bold hover:underline text-gray-300"
              >
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
              At Justiway Travel & Tours, we specialize in crafting
              unforgettable travel experiences tailored uniquely to you. Whether
              your ideal escape involves relaxing on a sun-drenched tropical
              beach, discovering the charm of historic cities, immersing
              yourself in vibrant cultures, or enjoying a romantic getaway with
              your partner, we’ve got you covered. Our tour packages are
              designed with flexibility in mind, carefully customized to match
              your budget, interests, and schedule. With our experienced team
              handling every detail, all you have to do is focus on making
              lasting memories.
            </motion.div>
          )}
        </div>
      </motion.div>

      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#222] underline">
            Our Tour Packages
          </h2>
          <div className="">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  className="mb-6 break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.img
                    src={pkg.image}
                    alt={pkg.title}
                    className={`w-full object-cover mb-3 ${pkg.heightClass}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="px-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#222]">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{pkg.description}</p>
                    <div className=" flex items-center justify-between mt-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        {pkg.category}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white px-3 py-1 mb-4 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300"
                      >
                        {pkg.book}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );


}