
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Card from "@/cards/Card";
import Footer from "@/components/Footer";

const slides = [
  {
    title: "Explore the World with Confidence",
    text: "At Justiway Travel & Tours, we specialize in helping you navigate the world with confidence.",
    button: "Learn More",
    image: "/images/travelady.png",
  },
  {
    title: "Visa Support You Can Rely On",
    text: "Whether you're looking to explore a new destination or apply for a visa, we're here to simplify the process.",
    button: "Get Visa Help",
    image: "/images/visa1.jpg",

  },
  {
    title: "Study Abroad With Ease",
    text: "Pursue studies abroad while we take care of the details and ensure a smooth transition.",
    button: "Study Abroad",
    image: "/images/students1.jpg",
  },
  {
    title: "Your Journey, Our Passion",
    text: "With years of experience and a passion for travel, we help you focus on the journey ahead.",
    button: "Start Planning",
    image: "/images/waltz.jpg",
  },
];

const slideVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Home () {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slides.forEach((slide) => {
      const img: HTMLImageElement = new window.Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="z-0 w-full h-full "
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-xl text-lg md:text-xl mb-6"
              >
                {slides[currentSlide].text}
              </motion.p>
              <motion.button
                onClick={nextSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className=" px-6 py-3 rounded text-white font-semibold  z-10 bg-gradient-to-r from-[#2137fc] to-[#50e3c2] hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300"
              >
                {slides[currentSlide].button}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#2137fc]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-[#222]">
        <h1 className="text-3xl font-bold mb-2">Discover the World</h1>
        <p className="text-lg leading-relaxed">
          Justiway Travel & Tours is a trusted travel solutions provider based
          in Nigeria. Our mission is to open up the world to our clients,
          offering seamless visa processing, curated tour experiences, hotel
          bookings, travel insurance, and academic admissions support to top
          institutions across the UK and other study destinations. Whether you
          are planning a family vacation, seeking a student visa, or applying
          for your Nigerian passport, our experienced team ensures you get
          expert advice, fast service, and peace of mind.
        </p>
      </div>
      <Card />
      <div>
        <Footer />
      </div>
    </>
  )
}
