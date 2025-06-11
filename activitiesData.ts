export interface Activity {
  id: string;
  name: string;
  icon: string;
  description: string;
  images: string[];
}

export const activities: Activity[] = [
  {
    id: "paragliding",
    name: "Paragliding",
    icon: "/images/icons/parachute.png",
    description:
      "Experience the thrill of soaring above mountains and valleys with our expert-guided paragliding adventures.",
    images: ["/images/activities/para1.jpg", "/images/activities/para1.jpg"],
  },
  {
    id: "rafting",
    name: "Rafting",
    icon: "/images/icons/water-rafting.png",
    description:
      "Ride the rapids and explore wild rivers with our exhilarating rafting tours.",
    images: ["/images/activities/para1.jpg", "/images/activities/para1.jpg"],
  },
  {
    id: "skiing",
    name: "Skiing",
    icon: "/images/icons/skiing.png",
    description:
      "Hit the slopes and glide through snow-covered peaks with our ski adventure packages.",
    images: ["/images/activities/para1.jpg", "/images/activities/para1.jpg"],
  },
];
