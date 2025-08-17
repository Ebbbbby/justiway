// export default function VisaPage() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Visa Services</h1>
//       <p className="mb-2">
//         At Justiway Travel & Tours, we specialize in providing comprehensive visa support
//         services to help you navigate the complexities of visa applications and requirements.
//       </p>
//       <p className="mb-2">
//         Our experienced team is here to assist you with:
//       </p>
//       <ul className="list-disc pl-5 mb-4">
//         <li>Visa Consultation</li>
//         <li>Document Preparation</li>
//         <li>Application Submission</li>
//         <li>Follow-up and Tracking</li>
//       </ul>
//       <p>
//         Contact us today to learn more about our visa services and how we can assist you
//         in your travel plans!
//       </p>
//     </div>
//   );
// }
'use client';

import { motion } from "framer-motion";
import Image from "next/image";
 import {
   FaPlane,
   FaUserGraduate,
   FaBriefcase,
   FaBuilding,
   FaUsers,
   FaRoute,
   FaGlobe,
 } from "react-icons/fa";

// If you use Next.js, you can swap <img> for next/image.
// Tailwind assumed to be configured in your project.

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

const slideIn = (from: "left" | "right" = "left", delay = 0) => ({
  hidden: { opacity: 0, x: from === "left" ? -60 : 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay } },
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function VisaImmigrationPage() {


const services = [
  {
    title: "Tourist & Visit Visas",
    desc: "Short stays for holidays, family visits, or conferences.",
    icon: <FaPlane className="text-blue-600 text-4xl" />,
  },
  {
    title: "Student Visas",
    desc: "Application guidance for undergraduate, postgraduate, and language programs.",
    icon: <FaUserGraduate className="text-green-600 text-4xl" />,
  },
  {
    title: "Work & Employment Visas",
    desc: "Employer sponsorship, skilled worker routes, and permit checks.",
    icon: <FaBriefcase className="text-orange-600 text-4xl" />,
  },
  {
    title: "Business & Investor Visas",
    desc: "Entrepreneur, startup, and investor pathways with documentation support.",
    icon: <FaBuilding className="text-purple-600 text-4xl" />,
  },
  {
    title: "Family Reunion & Spouse Visas",
    desc: "Reunite with loved ones: spousal, partner, and dependent routes.",
    icon: <FaUsers className="text-pink-600 text-4xl" />,
  },
  {
    title: "Transit Visas",
    desc: "Smooth layovers with the right transit documentation.",
    icon: <FaRoute className="text-teal-600 text-4xl" />,
  },
  {
    title: "Permanent Residency Support",
    desc: "Eligibility checks, forms, and evidence review for PR/immigration.",
    icon: <FaGlobe className="text-indigo-600 text-4xl" />,
  },
];

  const countries = ["USA", "UK", "Canada", "Australia", "Schengen", "UAE", "More"];

  const bullets = [
    {
      title: "Application Form Guidance",
      desc: "We handle the forms and keep everything consistent and error‑free.",
    },
    {
      title: "Documentation Review",
      desc: "Comprehensive checklist + professional review before submission.",
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews and embassy‑style questions (where applicable).",
    },
    {
      title: "Appointments & Follow‑up",
      desc: "We secure your slots and track your application until a decision.",
    },
    {
      title: "Travel History & Appeals",
      desc: "Advice to strengthen your profile and guidance on visa appeals.",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/consult.jpg"
              width={900}
              height={900}
              alt="Airplane wing over clouds"
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70vh] flex flex-col items-center justify-center text-center text-white">
            <motion.h1
              variants={fadeIn(0)}
              initial="hidden"
              animate="show"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Visa & Immigration Services
            </motion.h1>
            <motion.p
              variants={fadeIn(0.15)}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-200"
            >
              Getting the right visa can be overwhelming, but with Justiway
              Travel & Tours, you’re in expert hands. We provide professional
              visa advisory and end‑to‑end processing for individuals, students,
              tourists, and business travelers.
            </motion.p>

            <motion.div
              variants={fadeIn(0.3)}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {countries.map((c) => (
                <span
                  key={c}
                  className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm border border-white/20"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <motion.div
              variants={slideIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-indigo-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Your journey, expertly handled.
              </h2>
              <p className="mt-2 text-white/90">
                From choosing the right category to submitting a strong
                application, our specialists reduce errors, save time, and
                increase your chances of success.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <motion.h3
                variants={slideIn("left", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl lg:text-3xl font-bold underline"
              >
                Our Visa Services
              </motion.h3>
              <motion.p
                variants={slideIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-sm text-gray-600 max-w-xl"
              >
                Select the pathway that fits your goal. Each service includes
                tailored checklists, professional reviews, and concierge‑style
                guidance.
              </motion.p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >

              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeIn(0)}
                  className="group rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
                >
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <motion.h3
              variants={fadeIn(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl lg:text-3xl font-bold underline"
            >
              What We Offer
            </motion.h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  variants={fadeIn(i * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:bg-white hover:shadow-lg transition"
                >
                  <h4 className="font-semibold text-gray-900">{b.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={slideIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 rounded-2xl bg-emerald-600 text-white p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              <div className="text-lg font-semibold">
                Avoid costly errors and delays.
              </div>
              <div className="text-white/90 text-sm">
                Let our team help you navigate the visa and immigration process
                smoothly and successfully—from paperwork to final decision.
              </div>
            </motion.div>
          </div>
        </section>
        {/*
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/culture.jpg"
            width={500}
            height={500}
            alt="Passport and boarding pass"
            className="w-full h-[44vh] object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn(0)} className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Ready to start your application?
              </h3>
              <p className="mt-2 text-white/90 max-w-2xl">
                Tell us your destination and purpose of travel. We’ll send a
                personalized checklist and timeline within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-700 px-5 py-3 text-sm font-semibold shadow hover:shadow-md transition"
                >
                  Get Free Assessment
                </a>
                <a
                  href="#countries"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
                >
                  See Countries
                </a>
              </div>
            </motion.div>

            <motion.form
              variants={fadeIn(0.1)}
              id="contact"
              className="bg-white text-gray-900 rounded-2xl p-6 shadow"
            >
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-medium">
                  Full Name
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="text-sm font-medium">
                  Email
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="jane@example.com"
                  />
                </label>
                <label className="text-sm font-medium">
                  Destination
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Canada"
                  />
                </label>
                <label className="text-sm font-medium">
                  Purpose
                  <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Tourist / Visit</option>
                    <option>Study</option>
                    <option>Work</option>
                    <option>Business / Investor</option>
                    <option>Family / Spouse</option>
                    <option>Transit</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-indigo-700 transition"
                >
                  Request Callback
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section> */}

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <motion.h3
              variants={fadeIn(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl lg:text-3xl font-bold underline"
            >
              Frequently Asked Questions
            </motion.h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How early should I apply?",
                  a: "Ideally 8–12 weeks before travel/study start. Some embassies require even earlier during peak seasons.",
                },
                {
                  q: "Can you guarantee approval?",
                  a: "No agency can guarantee a visa. We focus on accurate documentation, eligibility guidance, and a strong application.",
                },
                {
                  q: "Do you book appointments?",
                  a: "Yes, we help secure embassy/biometrics appointments and follow up on your behalf.",
                },
                {
                  q: "Do you help with refusals?",
                  a: "We review refusal reasons, provide appeal or re‑apply strategies, and help strengthen evidence where applicable.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  variants={fadeIn(i * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition"
                >
                  <div className="font-semibold">{item.q}</div>
                  <div className="mt-1 text-sm text-gray-600">{item.a}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
