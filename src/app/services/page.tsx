import ServicesCard from "@/components/ServicesCard";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () =>{
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
      <div className="max-w-5xl mx-auto px-4 py-14 text-center text-[#222]">
        <h1 className="text-3xl font-bold mb-4 underline">Our Services</h1>
        <p className="text-lg leading-relaxed mb-8">
          At Justiway Travel & Tours, we are dedicated to making your travel
          experience seamless, enjoyable, and unforgettable. We offer a
          comprehensive range of services tailored to meet individual, group,
          and corporate travel needs. Our offerings include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/visa">
            <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">Visa Assistance</h2>
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
          <Link href="/tours">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">
                Custom Tour packages
              </h2>
              <p>
                Tailor-made local and international tour packages to suit your
                preferences and budget.
              </p>
              <div className="space-y-2 mt-4">
                <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white text-sm px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
                  Show More
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className=" py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#222]">
          <div className="flex w-full gap-x-4 items-center justify-center mb-6">
            <div className="flex bg-white p-4 rounded-lg w-[50%] ">
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
                <h2 className="text-2xl font-bold mb-4">Flight Ticketing</h2>
                <p className="text-sm leading-relaxed w-full  ml-2">
                  With years of experience in the travel industry, we pride
                  ourselves on delivering exceptional service and creating
                  memorable experiences for our clients. Our team of experts is
                  committed to providing personalized solutions that cater to
                  your unique travel needs.
                </p>
              </div>
            </div>

            <div className="flex bg-white p-4 rounded-lg w-[50%]">
              <div className="w-full">
                <Image
                  src="/images/reserve.jpg"
                  alt="Flight Ticketing"
                  width={1500}
                  height={1500}
                  className="w-full h-50 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Hotel Booking</h2>
                <p className="text-sm leading-relaxed w-full ml-2">
                  We understand that every traveler has unique preferences and
                  requirements. Whether you are traveling for business or
                  leisure, we offer a wide range of hotel options to suit your
                  needs, from budget-friendly accommodations to luxury stays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ServicesCard/>

    </div>
  );
}

export default ServicesPage;