import ChoiceCard from "@/components/ChoiceCard";
import { BiSupport } from "react-icons/bi";
import { FaHandshake, FaHotel, FaPassport } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdFlight } from "react-icons/md";
import { RiCompassDiscoverLine, RiVisaLine } from "react-icons/ri";

export default function Card(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#222]">
      <h1 className="text-3xl font-bold mb-4 text-[#222] text-center">
        Why Travel With Justiway
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChoiceCard
          title="Expert Guidance"
          description="Our seasoned travel experts provide trusted advice tailored to your unique needs."
          icon={<RiCompassDiscoverLine />}
        />
        <ChoiceCard
          title="Seamless Planning"
          description="We ensure every travel detail is perfectly planned for stress free experiences."
          icon={<LuNotebookPen />}
        />
        <ChoiceCard
          title="24/7 Support"
          description="We're always here, day or night to support you throughout your journey.

"
          icon={<BiSupport />}
        />
        <ChoiceCard
          title="Travel Visa Assistance"
          description="Expert help with visa applications and travel requirements"
          icon={<RiVisaLine />}
          className="bg-blue-50 border-blue-100"
        />

        <ChoiceCard
          title="Value Guarantee"
          description="We guarantee the best value through trusted services and unforgettable experiences"
          icon={<FaHandshake />}
          className="bg-amber-50 border-amber-200"
        />

        <ChoiceCard
          title="Hotel Bookings"
          description="We help book quality hotels for your comfort in any travel destination"
          icon={<FaHotel />}
          className="bg-emerald-50 border-emerald-100"
        />
        <ChoiceCard
          title="Flight Bookings"
          description="We handle your flight reservations swiftly. Affordable, convenient, and perfectly timed trips"
          icon={<MdFlight />}
        />
        <ChoiceCard
          title="Nigerian Passport Application"
          description="We assist with passport applications, making the process faster and stress free"
          icon={<FaPassport />}
        />
      </div>
    </div>
  );
}