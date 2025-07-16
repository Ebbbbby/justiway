import Image from "next/image";

export default function ServicesCard() {
  return (
    <>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#222]">
          <div className="flex w-full gap-x-4 items-center justify-center mb-6 flex-col lg:flex-row">
            <div className=" bg-white p-4 rounded-lg w-full mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/plane.jpg"
                  alt="Flight Ticketing"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Flight Ticketing</h2>
                <p className="text-sm leading-relaxed w-full">
                  With years of experience in the travel industry, we pride
                  ourselves on delivering exceptional service and creating
                  memorable experiences for our clients. Our team of experts is
                  committed to providing personalized solutions that cater to
                  your unique travel needs.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg w-full  mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/reserve.jpg"
                  alt="Hotel Booking"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Hotel Booking</h2>
                <p className="text-sm leading-relaxed w-full">
                  We understand that every traveler has unique preferences and
                  requirements. Whether you are traveling for business or
                  leisure, we offer a wide range of hotel options to suit your
                  needs, from budget-friendly accommodations to luxury stays.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg w-full  mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/insurance.jpg"
                  alt="Hotel Booking"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Travel Insurance</h2>
                <p className="text-sm leading-relaxed w-full">
                  Our Insurance policies are designed to give you peace of mind,
                  allowingyou to focus on enjoying your journey without worrying
                  about unexpected event. Our travel insurance solutions ensure
                  that you are safeguarded against unforeseen circumstances.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-x-4 items-center justify-center mb-6 flex-col lg:flex-row">
            <div className=" bg-white p-4 rounded-lg w-full mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/transfers.jpg"
                  alt="Flight Ticketing"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Airport Transfers</h2>
                <p className="text-sm leading-relaxed w-full">
                  Smooth and timely pick-up and drop-off services for your
                  convenience. We understand the importance of seamless airport
                  transfers, which is why we offer reliable and efficient
                  transportation services to ensure you reach your destination
                  comfortably and on time.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg w-full  mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/consult.jpg"
                  alt="Hotel Booking"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Travel Consultation</h2>
                <p className="text-sm leading-relaxed w-full">
                  Professional travel advice to help you plan the perfect
                  journey. Our travel consultants are here to assist you in
                  making informed decisions about your travel plans, ensuring
                  that you have a smooth and enjoyable experience from start to
                  finish.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg w-full  mb-6 lg:mb-0">
              <div className="w-full">
                <Image
                  src="/images/manage.jpg"
                  alt="Hotel Booking"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">
                  Corporate Travel Management
                </h2>
                <p className="text-sm leading-relaxed w-full">
                  Customized travel solutions for businesses and corporate
                  clients. Whether you are planning a vacation, business trip,
                  or pursuing your dreams abroad, Justiway Travel & Tours is
                  here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <button className="bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white px-4 py-2 rounded-md hover:from-[#1a2bc7] hover:to-[#3dbfa2] transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
