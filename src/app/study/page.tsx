"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGlobe,
  FaUniversity,
  FaFileAlt,
  FaPlane,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";

// animation variants
const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export default function StudyAbroadPage() {
  const services = [
    {
      title: "Academic Counseling",
      desc: "Personalized guidance to help you choose the right course and destination.",
      icon: <FaGlobe className="text-blue-600 text-4xl" />,
    },
    {
      title: "University Applications",
      desc: "End-to-end support with applications to colleges and universities worldwide.",
      icon: <FaUniversity className="text-green-600 text-4xl" />,
    },
    {
      title: "SOP & Documentation",
      desc: "Assistance with crafting strong statements of purpose and preparing supporting documents.",
      icon: <FaFileAlt className="text-purple-600 text-4xl" />,
    },
    {
      title: "Visa & Interview Prep",
      desc: "Guidance on visa application and embassy interview preparation to boost your success.",
      icon: <FaPlane className="text-orange-600 text-4xl" />,
    },
    {
      title: "Pre-Departure Support",
      desc: "Briefings, travel arrangements, and cultural orientation for a smooth journey.",
      icon: <FaHandsHelping className="text-teal-600 text-4xl" />,
    },
    {
      title: "Accommodation & Settlement",
      desc: "Help with housing, insurance, and airport pickup so you settle in with ease.",
      icon: <FaHome className="text-pink-600 text-4xl" />,
    },
  ];

  const countries = [
    "Canada",
    "United Kingdom",
    "United States",
    "Australia",
    "Ireland",
    "Germany",
    "Turkey",
    "Cyprus",
    "UAE",
    "and more...",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/study.jpg"
          alt="Study Abroad"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Study Abroad Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-lg"
          >
            Turn your international education dreams into reality with Justiway
            Travel & Tours. From admissions to arrival, we guide you every step
            of the way.
          </motion.p>
        </div>
      </div>

      {/* Countries */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
            Popular Destinations
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c, i) => (
              <motion.span
                key={c}
                variants={fadeIn(i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-[#222] underline">
            How We Support You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeIn(i * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-blue-600 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Global Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            Let us help you with applications, documents, visas, and settlement.
            Your future starts here!
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Us Today
          </motion.a>
        </div>
      </section>
    </div>
  );
}
