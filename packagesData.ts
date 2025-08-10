// types.ts
export interface TourPackage {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}


// packagesData.ts
export const packages = [
  {
    id: 1,
    title: "Local & International Vacation Packages",
    description:
      "From quick city breaks to faraway island escapes, we create vacations you'll never forget.",
    image: "/images/vacation.jpg", // tall image
    category: "Vacation",
    heightClass: "h-[300px]", // taller card
    book: "Book Now",
  },
  {
    id: 2,
    title: "Honeymoon & Romantic Escapes",
    description:
      "Celebrate love with curated romantic getaways tailored to you.",
    image: "/images/romance.jpg", // square
    category: "Romantic",
    heightClass: "h-[320px]",
    book: "Book Now",
  },
  {
    id: 3,
    title: "Group Tours",
    description:
      "Perfect for family reunions, corporate bonding, or student adventures.",
    image: "/images/group1.jpg", // portrait
    category: "Group",
    heightClass: "h-[400px]", // highlight
    book: "Book Now",
  },
  {
    id: 4,
    title: "Heritage & Cultural Exploration",
    description:
      "Dive into the traditions, art, and history of unique destinations.",
    image: "/images/culture.jpg", // short
    category: "Cultural",
    heightClass: "h-[200px]",
    book: "Book Now",
  },
  {
    id: 5,
    title: "Wildlife Safaris & Eco-Tours",
    description:
      "Experience the wild, from African safaris to rainforest treks.",
    image: "/images/wildlife.jpg", // portrait
    category: "Adventure",
    heightClass: "h-[360px]",
    book: "Book Now",
  },
  {
    id: 6,
    title: "Religious & Pilgrimage Tours",
    description: "From Mecca to Jerusalem, we guide your spiritual journey.",
    image: "/images/spiritual.jpg", // short
    category: "Spiritual",
    heightClass: "h-[300px]",
    book: "Book Now",
  },
  {
    id: 7,
    title: "Adventure Travel",
    description:
      "Thrilling expeditions like hiking, skiing, or desert safaris.",
    image: "/images/activities/ski2.jpg", // wide
    category: "Adventure",
    heightClass: "h-[380px]", // highlight
    book: "Book Now",
  },
];

