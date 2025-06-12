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
      "Paragliding is a once-in-a-lifetime experience that lets you soar freely above valleys, coastlines, and mountain ranges. Suspended in the air with just a fabric wing and wind beneath you, paragliding offers breathtaking panoramic views and a unique sense of serenity. It’s the perfect blend of adventure and peace, ideal for those looking to break away from the ordinary. Whether you're flying over scenic beaches or dramatic cliffs, every flight is a chance to connect with nature and enjoy the beauty of the world from a bird’s-eye view.",
    images: ["/images/activities/para1.jpg", "/images/activities/para2.jpg"],
  },
  {
    id: "rafting",
    name: "Rafting",
    icon: "/images/icons/water-rafting.png",
    description:
      "Skiing is a dynamic winter sport that combines speed, technique, and stunning mountain scenery. Whether you're carving down powdery slopes at a luxury ski resort or taking your first lessons on a gentle hill, skiing promises excitement at every level. Skiing destinations often come with a vibrant atmosphere, where visitors enjoy everything from cable car rides to snow festivals. It’s an ideal choice for families, groups, or solo travelers looking to explore snow-covered landscapes while building unforgettable memories.",
    images: ["/images/activities/raft1.jpg", "/images/activities/raft2.jpg"],
  },
  {
    id: "skiing",
    name: "Skiing",
    icon: "/images/icons/skiing.png",
    description:
      "Rafting is an adrenaline-fueled adventure that plunges you into the heart of nature’s most powerful rivers. Equipped with a paddle and safety gear, you’ll work with your team to navigate through swirling rapids, cascading waters, and narrow gorges. Whether you choose a gentle river or a more challenging course, rafting is a thrilling way to explore natural beauty while testing your limits in the most refreshing way possible.",
    images: ["/images/activities/ski1.jpg", "/images/activities/ski2.jpg"],
  },

  {
    id: "hiking",
    name: "Hiking",
    icon: "/images/icons/hiking.png",
    description:
      "Hiking is a timeless outdoor activity that invites you to explore the great outdoors at your own pace. From gentle walks through lush forests to challenging treks up rugged mountains, hiking offers something for everyone. It’s a chance to disconnect from the hustle and bustle of daily life, breathe in fresh air, and immerse yourself in nature’s beauty. Whether you’re hiking solo or with friends, each trail presents new discoveries and breathtaking views that make every step worthwhile.",
    images: ["/images/activities/hike1.jpg", "/images/activities/hike2.jpg"],
  },

  {
    id: "camping",
    name: "Camping",
    icon: "/images/icons/tent.png",
    description:
      "Camping is a beloved outdoor activity that allows you to escape the everyday grind and reconnect with nature. Whether you’re pitching a tent in a national park or setting up a cozy campsite by a lake, camping offers a unique way to experience the great outdoors. It’s about gathering around a campfire, stargazing, and enjoying the simple pleasures of life away from technology. Camping is perfect for families, friends, or solo adventurers looking to create lasting memories in the heart of nature.",
    images: ["/images/activities/camp1.jpg", "/images/activities/camp2.jpg"],
  },
  {
    id: "biking",
    name: "Biking",
    icon: "/images/icons/bicycle.png",
    description:
      "Biking is a versatile outdoor activity that combines fitness, exploration, and fun. Whether you prefer road cycling, mountain biking, or leisurely rides through scenic parks, biking offers a fantastic way to enjoy the outdoors. It’s an eco-friendly mode of transportation that allows you to cover more ground while taking in the sights and sounds of nature. Biking is suitable for all ages and skill levels, making it a great choice for families, friends, or solo adventurers looking to stay active and explore new trails.",
    images: ["/images/activities/bike1.jpg", "/images/activities/bike2.jpg"],
  },

  {
    id: "fishing",
    name: "Fishing",
    icon: "/images/icons/fishing.png",
    description:
      "Fishing is a peaceful and rewarding outdoor activity that connects you with nature and the thrill of the catch. Whether you’re casting a line in a tranquil lake, wading through a river, or deep-sea fishing in the ocean, fishing offers a unique blend of relaxation and excitement. It’s an opportunity to unwind, enjoy the serenity of the water, and perhaps even reel in your next big trophy fish. Fishing is perfect for individuals, families, or friends looking to bond over shared experiences in the great outdoors.",
    images: ["/images/activities/fish1.jpg", "/images/activities/fish2.jpg"],
  },
];
