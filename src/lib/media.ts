const IMG = "/assets/images";
const VID = "/assets/videos";

export type Photo = { src: string; alt: string };

const photo = (url: string, alt: string): Photo => ({ src: url, alt });

export const img = {
  towerNight: photo(
    `${IMG}/tower-night.jpg`,
    "The illuminated colonial clock tower and statues of Puerto Cabello at night",
  ),
  courtyard: photo(
    `${IMG}/courtyard.jpg`,
    "Casa Guipuzcoana's colonnaded interior courtyard with rattan chairs beneath a crystal chandelier",
  ),
  courtyardWide: photo(
    `${IMG}/courtyard-wide.jpg`,
    "Sunlight falling across the courtyard tiles between cream colonial columns",
  ),
  corridorArt: photo(
    `${IMG}/corridor-art.jpg`,
    "A gallery corridor of the hotel with paintings on easels and a dark timber beam ceiling",
  ),
  roomBed: photo(
    `${IMG}/room-bed.jpg`,
    "A guest room bed dressed in white linen with folded towels and soft lamplight",
  ),
  robeDetail: photo(
    `${IMG}/robe-detail.jpg`,
    "A white bathrobe embroidered with the Casa Guipuzcoana crest",
  ),
  doors: photo(`${IMG}/doors.jpg`, "Dark panelled colonial doors opening onto warm interior light"),
  aerial: photo(
    `${IMG}/aerial.jpg`,
    "Aerial view of the terracotta-roofed colonial house, its gardens and the bay of Puerto Cabello",
  ),
  poolUmbrella: photo(
    `${IMG}/pool-umbrella.jpg`,
    "The hotel pool with a Casa Guipuzcoana parasol and sculptural loungers under a blue sky",
  ),
  poolLoungers: photo(
    `${IMG}/pool-loungers.jpg`,
    "White in-water loungers along the edge of the turquoise pool",
  ),
  beachClub: photo(
    `${IMG}/beach-club.jpg`,
    "Sun loungers, a parasol and rolled striped towels at the beach club",
  ),
  facadePalm: photo(
    `${IMG}/facade-palm.jpg`,
    "Whitewashed façade with dark timber shutters framed by a palm frond",
  ),
} as const;

export const logo = {
  light: `${IMG}/logo-light.png`,
  dark: `${IMG}/logo-dark.png`,
};

export const film = {
  rooms: { src: `${VID}/film-rooms.mp4`, poster: img.roomBed.src, label: "Inside the house" },
  aerial: { src: `${VID}/film-aerial.mp4`, poster: img.aerial.src, label: "Puerto Cabello from above" },
  pool: { src: `${VID}/film-pool.mp4`, poster: img.poolLoungers.src, label: "Water and light" },
  facade: { src: `${VID}/film-facade.mp4`, poster: img.facadePalm.src, label: "Architecture" },
};
