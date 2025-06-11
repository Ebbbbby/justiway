import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const OurVision = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  // };
  return (
    <div className=" w-fullw-full bg-gradient-to-br from-blue-50 to-blue-100">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 text-[#222]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            // className=" w-full md:w-[400px] lg:w-[580px] xl-w-[650px]"
            className="w-full max-w-[580px] mx-auto lg:max-w-none lg:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.3,
            }}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <Image
                  src="/images/travlady.png"
                  alt="Background blob"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* <div className="">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="text-[#222] max-w-8xl mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold underline mb-2">
                  Mission Statement
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  At Justiway Travel & Tours, our mission is to empower
                  individuals and families to explore the world with confidence.
                  We achieve this by providing expert travel solutions,
                  including seamless visa processing, curated tour experiences,
                  reliable flight and hotel bookings, travel insurance, and
                  academic admissions support. Our dedicated team ensures
                  personalized guidance, 24/7 support, and exceptional value,
                  making every journey smooth, enriching, and memorable.
                </p>
                <h2 className="text-2xl font-bold underline mb-2">
                  Vision Statement
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Our vision is to be the most trusted and innovative travel
                  solutions provider in Nigeria and beyond. We aspire to open
                  doors to global opportunities by delivering exceptional
                  service, fostering cultural exploration,and simplifying
                  international travel and study processes. Through our
                  commitment to excellence and customer satisfaction, we aim to
                  become the go-to partner for travelers seeking seamless and
                  enriching experiences worldwide.
                </p>
              </div>
            </motion.div>
          </div> */}
          <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.h2
                className="text-2xl md:text-2xl font-bold underline mb-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Mission Statement
              </motion.h2>

              <motion.p
                className="mb-4 text-base md:text-lg leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="mb-4 text-lg leading-relaxed">
                  At Justiway Travel & Tours, our mission is to empower
                  individuals and families to explore the world with confidence.
                  We achieve this by providing expert travel solutions,
                  including seamless visa processing, curated tour experiences,
                  reliable flight and hotel bookings, travel insurance, and
                  academic admissions support. Our dedicated team ensures
                  personalized guidance, 24/7 support, and exceptional value,
                  making every journey smooth, enriching, and memorable.
                </p>
              </motion.p>
              <motion.h2
                className="text-2xl md:text-2xl font-bold underline mb-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Vision Statement
              </motion.h2>

              <motion.p
                className="mb-6 text-base md:text-lg leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="mb-4 text-lg leading-relaxed">
                  Our vision is to be the most trusted and innovative travel
                  solutions provider in Nigeria and beyond. We aspire to open
                  doors to global opportunities by delivering exceptional
                  service, fostering cultural exploration,and simplifying
                  international travel and study processes. Through our
                  commitment to excellence and customer satisfaction, we aim to
                  become the go-to partner for travelers seeking seamless and
                  enriching experiences worldwide.
                </p>
              </motion.p>

            </motion.div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default OurVision;
