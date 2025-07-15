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
                  src="/images/plane.jpg"
                  alt="Flight Ticketing"
                  width={1500}
                  height={1500}
                  className="w-full h-70 object-cover mb-6 rounded-lg shadow-md"
                />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Airport Transfers</h2>
                <p className="text-sm leading-relaxed w-full ml-2">
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
                <h2 className="text-2xl font-bold mb-4">Travel Consultation</h2>
                <p className="text-sm leading-relaxed w-full ml-2">
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
                  src="/images/reserve.jpg"
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
      </div>
    </>
  );
}
