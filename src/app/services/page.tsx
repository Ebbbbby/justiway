"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesPage = () => {
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
  return (
    <div className="">
      <div className="relative text-white">
        <div className="h-auto">
          <Image
            src="/images/services.jpg"
            alt="About Us"
            width={1500}
            height={100}
            className="w-full h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-2">Our Services</h1>
            <p className="text-sm text-gray-200">
              <Link
                href="/"
                className="font-bold hover:underline text-gray-300 "
              >
                Home
              </Link>
              <span className="mx-2 font-bold">{">"}</span>
              <span className="text-[#2137fc] font-bold">Services</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-5xl mx-auto px-4 py-14 text-center text-[#222]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {" "}
            <h1 className="text-3xl font-bold mb-4 underline">Our Services</h1>
            <p className="text-lg leading-relaxed mb-8 ">
              At Justiway Travel & Tours, we are dedicated to making your travel
              experience seamless, enjoyable, and unforgettable. We offer a
              comprehensive range of services tailored to meet individual,
              group, and corporate travel needs. Our offerings include:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={item}>
              <Link href="/visa">
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold mb-2">
                    Visa Assistance
                  </h2>
                  <p>
                    Get expert guidance on visa applications, documentation, and
                    processing for various countries.
                  </p>
                  <div className="space-y-2 mt-4">
                    <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white text-sm px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
                      Show More
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/study">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold mb-2">Study Abroad</h2>
                  <p>
                    Personalized advisory services for students seeking
                    international education opportunitie.
                  </p>
                  <div className="space-y-2 mt-4">
                    <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white text-sm px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
                      Show More
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/tours">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold mb-2">
                    Custom Tour packages
                  </h2>
                  <p>
                    Tailor-made local and international tour packages to suit
                    your preferences and budget.
                  </p>
                  <div className="space-y-2 mt-4">
                    <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white text-sm px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
                      Show More
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#222] overflow-hidden">
          <div className="flex w-full gap-x-4 items-center justify-center mb-6 flex-col lg:flex-row ">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%]"
            >
              <div className="w-full">
                <Image
                  src="/images/plane.jpg"
                  alt="Flight Ticketing"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Flight Ticketing</h2>
                <p className="text-[15px] leading w-full  md:ml-2 ">
                  With years of experience in the travel industry, we pride
                  ourselves on delivering exceptional service and creating
                  memorable experiences for our clients. Our team of experts is
                  committed to providing personalized solutions that cater to
                  your unique travel needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%] mt-6 lg:mt-0"
            >
              <div className="w-full">
                <Image
                  src="/images/reserve.jpg"
                  alt="Hotel Booking"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Hotel Booking</h2>
                <p className="text-[15px] leading w-full md:ml-2">
                  We understand that every traveler has unique preferences and
                  requirements. Whether you are traveling for business or
                  leisure, we offer a wide range of hotel options to suit your
                  needs, from budget-friendly accommodations to luxury stays.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex w-full gap-x-4 items-center justify-center mb-6 flex-col lg:flex-row">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%]"
            >
              <div className="w-full">
                <Image
                  src="/images/insurance.jpg"
                  alt="insurance"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Travel Insurance</h2>
                <p className="text-[15px] leading w-full md:ml-2">
                  Our Insurance policies are designed to give you peace of mind,
                  allowingyou to focus on enjoying your journey without worrying
                  about unexpected event. Our travel insurance solutions ensure
                  that you are safeguarded against unforeseen circumstances.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%] mt-6 lg:mt-0"
            >
              <div className="w-full">
                <Image
                  src="/images/transfers.jpg"
                  alt="transfers"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Airport Transfers</h2>
                <p className="text-[15px] leading w-full md:ml-2">
                  Smooth and timely pick-up and drop-off services for your
                  convenience. We understand the importance of seamless airport
                  transfers, which is why we offer reliable and efficient
                  transportation services to ensure you reach your destination
                  comfortably and on time.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex w-full gap-x-4 items-center justify-center mb-6 flex-col lg:flex-row">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%]"
            >
              <div className="w-full">
                <Image
                  src="/images/consult.jpg"
                  alt="consultation"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Travel Consultation</h2>
                <p className="text-[15px] leading w-full md:ml-2">
                  Professional travel advice to help you plan the perfect
                  journey. Our travel consultants are here to assist you in
                  making informed decisions about your travel plans, ensuring
                  that you have a smooth and enjoyable experience from start to
                  finish.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full lg:w-[50%] mt-6 lg:mt-0"
            >
              <div className="w-full">
                <Image
                  src="/images/manage.jpg"
                  alt="manage"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">
                  Corporate Travel Management
                </h2>
                <p className="text-[15px] leading w-full md:ml-2">
                  Customized travel solutions for businesses and corporate
                  clients. Whether you are planning a vacation, business trip,
                  or pursuing your dreams abroad, Justiway Travel & Tours is
                  here to guide you every step of the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-center text-[#222]">
        <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
