"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
        optio illum cumque incidunt deleniti harum sapiente cum. Non eveniet
        doloremque nesciunt tenetur molestiae ea vitae, rem porro praesentium
        vel. A praesentium inventore ut expedita tenetur velit repudiandae iure
        minus excepturi quisquam odit error, reiciendis accusantium voluptatibus
        et quas deserunt corrupti itaque eum debitis quos mollitia corporis.
        Quam, expedita maxime? Voluptatibus est culpa harum id beatae provident
        tempore molestias odit commodi aperiam. Rerum possimus, magni
        consequuntur id, quaerat iste aliquid sequi commodi in velit quia
        mollitia deleniti modi perferendis inventore. Totam, consequatur velit!
        Perspiciatis repellendus quod voluptas veritatis pariatur voluptatem,
        officia velit cupiditate odio reprehenderit aliquid, blanditiis aperiam
        in obcaecati illo perferendis, sed quam eos tenetur assumenda! Facere,
        quos cupiditate? Reprehenderit, sint necessitatibus. Eos quisquam
        pariatur voluptatum quis, aut blanditiis deleniti expedita at sunt
        delectus id dignissimos magni repudiandae hic officiis sequi aliquam
        ipsam consectetur! Asperiores tempora impedit quo ullam! Recusandae,
        labore aperiam quis, similique possimus tempore, consequuntur voluptas
        dolorum provident autem odit laudantium cupiditate odio nihil
        voluptatem. Nostrum sit tempora consequatur sint numquam dolore illo
        sapiente excepturi doloribus optio. Doloremque voluptatibus aliquam
        consequatur illo quibusdam voluptatem vitae magni praesentium quam,
        totam qui, nulla eos rem labore facilis aperiam commodi repellendus
        ipsa, ut saepe modi quia cupiditate reprehenderit beatae. Quia?
        Accusamus culpa est, accusantium doloremque placeat ullam quaerat? Nemo
        recusandae facere enim numquam ut quidem fugiat modi rerum distinctio
        magni ipsam, culpa dolor architecto quibusdam voluptatibus sint
        exercitationem at alias? Illum repellendus alias nostrum quaerat at
        commodi corporis odit, dolores harum et eaque! Vero asperiores
        praesentium esse. Porro minus quibusdam animi esse dolore delectus, sit
        quo perspiciatis! Placeat, eveniet praesentium! Vero in iste magnam
        maiores, quos recusandae perferendis vitae corporis! Cum dolores, amet
        nobis commodi mollitia consectetur animi voluptatem explicabo rerum
        suscipit assumenda accusamus natus, est quas, dignissimos in unde!
        Veritatis exercitationem delectus quaerat animi? Assumenda hic enim
        ducimus rerum vero aut magni, a voluptatibus doloremque recusandae
        doloribus maxime corrupti saepe voluptatum earum consectetur iste
        suscipit fugiat neque similique ut. Non blanditiis rerum facilis sit
        amet voluptas commodi quis, ipsa minus necessitatibus velit sapiente
        debitis et aliquam architecto mollitia quae perferendis veritatis
        consectetur magnam unde dolorum corrupti quasi. Consectetur, obcaecati?
        Perspiciatis, aut. Maiores laudantium aperiam labore totam ex natus,
        quaerat blanditiis, veritatis cum esse tenetur sapiente sint asperiores
        provident odio quam quod harum id eius perspiciatis explicabo! Neque,
        facere fugiat! Natus officiis excepturi et quis odio maxime quia tenetur
        praesentium nulla veniam autem quaerat voluptatum modi corporis quidem
        harum, deleniti ea, tempora fuga quod! Aspernatur ducimus molestias
        explicabo rem omnis. Eos voluptatibus, aperiam facere officiis eum
        incidunt deserunt placeat accusamus eaque praesentium esse numquam, sint
        perferendis! Earum similique consectetur dolorem reprehenderit minima,
        ullam, ad odio rem fugit nemo mollitia deserunt. Tenetur adipisci,
        magnam incidunt, iste qui deleniti minus fuga repellendus et, ratione
        quidem nesciunt eaque deserunt. Delectus vero, molestiae impedit optio
        suscipit ratione nulla amet dolore, hic, error magnam veritatis? Nam
        cumque voluptas ut debitis repellendus rem cum dolores! Quibusdam
        repudiandae aliquam sed aspernatur iste minima asperiores, enim
        obcaecati omnis magnam facilis laborum. Autem eveniet quos unde officia
        voluptate numquam! Consequuntur veniam esse nihil, quae exercitationem
        odio ipsa earum fugit illum? Libero, error. Nostrum in voluptatem nemo
        earum eaque, quaerat repellat facere fugiat aut possimus quam officiis
        esse reiciendis voluptas. Quia deleniti beatae explicabo iusto nulla
        consectetur minus esse deserunt perspiciatis error? Perspiciatis ad
        excepturi distinctio beatae pariatur voluptate, illum assumenda itaque
        suscipit tenetur fugit qui eius voluptas eos debitis? Molestiae animi
        illo exercitationem, cupiditate maiores natus eligendi soluta,
        praesentium sunt magnam consequatur eos facilis error nesciunt velit
        iusto aut! Fugiat officia adipisci tempore? Eaque totam possimus modi
        quae est.
      </p>
    </>
  );
}
