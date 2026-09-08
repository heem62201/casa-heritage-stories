import { img, type Photo } from "@/lib/media";

export const hotel = {
  name: "Casa Guipuzcoana",
  kind: "Hotel Boutique",
  city: "Puerto Cabello",
  country: "Venezuela",
  tagline: "A 5-star boutique hotel where colonial heritage meets modern elegance.",
  statement: "Elegance is when history meets hospitality.",
  story:
    "Casa Guipuzcoana is a historic boutique hotel where heritage, architecture and hospitality come together in a refined and intimate setting.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "The Hotel", to: "/the-hotel" },
  { label: "Rooms", to: "/rooms" },
  { label: "Restaurant", to: "/restaurant" },
  { label: "Experiences", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const highlights = [
  { title: "5-Star Boutique Hotel", icon: "star" },
  { title: "Historic Colonial Building", icon: "building" },
  { title: "Restaurant at 1730", icon: "dining" },
  { title: "Exclusive Beach Club", icon: "wave" },
  { title: "Personalized Service", icon: "service" },
] as const;

export type Room = {
  slug: string;
  name: string;
  descriptor: string;
  photo: Photo;
  note: string;
};

export const rooms: Room[] = [
  {
    slug: "colonial-room",
    name: "Colonial Room",
    descriptor: "Heritage walls, quiet light",
    photo: img.roomBed,
    note: "Room information coming soon.",
  },
  {
    slug: "courtyard-room",
    name: "Courtyard Room",
    descriptor: "Overlooking the colonnade",
    photo: img.courtyardWide,
    note: "Room information coming soon.",
  },
  {
    slug: "casa-suite",
    name: "Casa Suite",
    descriptor: "The house at its most generous",
    photo: img.doors,
    note: "Room information coming soon.",
  },
  {
    slug: "garden-room",
    name: "Garden Room",
    descriptor: "Shutters open to the palms",
    photo: img.facadePalm,
    note: "Room information coming soon.",
  },
];

export type Experience = {
  slug: string;
  name: string;
  blurb: string;
  photo: Photo;
};

export const experiences: Experience[] = [
  {
    slug: "the-historic-house",
    name: "The Historic House",
    blurb:
      "Walk the courtyard, the colonnade and the art-lined corridors of a colonial building kept alive as a hotel.",
    photo: img.corridorArt,
  },
  {
    slug: "restaurant-at-1730",
    name: "Restaurant at 1730",
    blurb: "Dining inside the house, in rooms shaped by three centuries of Puerto Cabello.",
    photo: img.courtyard,
  },
  {
    slug: "the-beach-club",
    name: "The Beach Club",
    blurb: "An exclusive escape beyond the hotel, reserved for guests of the house.",
    photo: img.beachClub,
  },
  {
    slug: "puerto-cabello",
    name: "Puerto Cabello",
    blurb: "The colonial quarter, the bay and the light of the Venezuelan coast, a step from the door.",
    photo: img.aerial,
  },
];

export const galleryImages: Photo[] = [
  img.towerNight,
  img.courtyard,
  img.corridorArt,
  img.courtyardWide,
  img.roomBed,
  img.aerial,
  img.poolUmbrella,
  img.beachClub,
  img.poolLoungers,
  img.facadePalm,
  img.doors,
  img.robeDetail,
];
