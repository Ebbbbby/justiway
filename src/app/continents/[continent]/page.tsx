

import { notFound } from "next/navigation";

import { continents } from "../../../../data";
import Image from "next/image";
import Link from "next/link";

    type Props = {
      params: Promise<{
        continent: string;
      }>;
    };

export default async function SingleContinentPage({ params }: Props) {
  const { continent } = await params;
  const selected = continents.find(
    (item) => item.name.toLowerCase() === continent.toLowerCase()
  );

  if (!selected) return notFound();

  return (
    <div className=" text-[#222] max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 mt-6">
        {selected.name}
      </h1>
      <p className="text-center px-6 text-gray-600 mb-10">
        {selected.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  px-6  sm:px-6 lg:px-8">
        {selected.locations.map((loc) => (
          <div
            key={loc.name}
            className="hover:scale-105 transition-transform duration-500"
          >
            <Link href="/contact">
              <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-50 rounded-t-lg overflow-hidden ">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    className="object-cover"
                    width={500}
                    height={300}
                  />
                </div>

                <div className="p-4">
                  <Link href="/contact">
                    <h2 className="font-semibold text-lg text-[#2137fc] hover:underline">
                      {loc.name}
                    </h2>
                  </Link>

                  <p className="text-sm text-gray-600">{loc.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
