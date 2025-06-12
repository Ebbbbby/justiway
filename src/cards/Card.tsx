import ChoiceCard from "@/components/ChoiceCard";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { FaHandshake, FaHotel, FaPassport } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdFlight } from "react-icons/md";
import { RiCompassDiscoverLine, RiVisaLine } from "react-icons/ri";

export default function Card() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto py-14 mt-6 px-4 sm:px-6 lg:px-8 text-[#222]">
      <motion.h1
        className="text-3xl font-bold mb-4 text-[#222] text-center underline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        Why Travel With Justiway
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item}>
          <ChoiceCard
            title="Expert Guidance"
            description="Our seasoned travel experts provide trusted advice tailored to your unique needs."
            icon={<RiCompassDiscoverLine />}
          />
        </motion.div>

        <motion.div variants={item}>
          <ChoiceCard
            title="Seamless Planning"
            description="We ensure every travel detail is perfectly planned for stress free experiences."
            icon={<LuNotebookPen />}
          />
        </motion.div>
        <motion.div variants={item}>
          <ChoiceCard
            title="24/7 Support"
            description="We're always here, day or night to support you throughout your journey."
            icon={<BiSupport />}
          />
        </motion.div>

        <motion.div variants={item}>
          <ChoiceCard
            title="Travel Visa Assistance"
            description="Expert help with visa applications and travel requirements"
            icon={<RiVisaLine />}
            className="bg-blue-50 border-blue-100"
          />
        </motion.div>
        <motion.div variants={item}>
          <ChoiceCard
            title="Value Guarantee"
            description="We guarantee the best value through trusted services and unforgettable experiences"
            icon={<FaHandshake />}
            className="bg-amber-50 border-amber-200"
          />
        </motion.div>

        <motion.div variants={item}>
          <ChoiceCard
            title="Hotel Bookings"
            description="We help book quality hotels for your comfort in any travel destination"
            icon={<FaHotel />}
            className="bg-emerald-50 border-emerald-100"
          />
        </motion.div>
        <motion.div variants={item}>
          <ChoiceCard
            title="Flight Bookings"
            description="We handle your flight reservations swiftly. Affordable, convenient, and perfectly timed trips"
            icon={<MdFlight />}
          />
        </motion.div>

        <motion.div variants={item}>
          <ChoiceCard
            title="Nigerian Passport Application"
            description="We assist with passport applications, making the process faster and stress free"
            icon={<FaPassport />}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
