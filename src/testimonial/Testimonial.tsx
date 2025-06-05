"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Amaka Eze.",
    text: "Justiway Travel made my vacation in Greece seamless. From visa to hotel bookings, everything was handled perfectly.",
    location: "Lagos, Nigeria",
    image: "/images/profile1.jpg",
  },
  {
    name: "John Duru.",
    text: "The customer service is top-notch. They helped me navigate my study application to Canada!",
    location: "Abuja, Nigeria",
    image: "/images/profile2.jpg",
  },
  {
    name: "Zainab Sule.",
    text: "Booking a honeymoon to Mauritius through Justiway was the best decision ever!",
    location: "Kano, Nigeria",
    image: "/images/profile3.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-800 mb-10 underline"
      >
        What Our Clients Are Saying
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <div className=" flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">“{testimonial.text}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
