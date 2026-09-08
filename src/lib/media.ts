import towerNight from "@/assets/tower-night.jpg.asset.json";
import courtyard from "@/assets/courtyard.jpg.asset.json";
import courtyardWide from "@/assets/courtyard-wide.jpg.asset.json";
import corridorArt from "@/assets/corridor-art.jpg.asset.json";
import roomBed from "@/assets/room-bed.jpg.asset.json";
import robeDetail from "@/assets/robe-detail.jpg.asset.json";
import doors from "@/assets/doors.jpg.asset.json";
import aerial from "@/assets/aerial.jpg.asset.json";
import poolUmbrella from "@/assets/pool-umbrella.jpg.asset.json";
import poolLoungers from "@/assets/pool-loungers.jpg.asset.json";
import beachClub from "@/assets/beach-club.jpg.asset.json";
import facadePalm from "@/assets/facade-palm.jpg.asset.json";
import logoLight from "@/assets/logo-light.png.asset.json";
import logoDark from "@/assets/logo-dark.png.asset.json";
import filmRooms from "@/assets/film-rooms.mp4.asset.json";
import filmAerial from "@/assets/film-aerial.mp4.asset.json";
import filmPool from "@/assets/film-pool.mp4.asset.json";
import filmFacade from "@/assets/film-facade.mp4.asset.json";

export type Photo = { src: string; alt: string };

const photo = (url: string, alt: string): Photo => ({ src: url, alt });

export const img = {
  towerNight: photo(
    towerNight.url,
    "The illuminated colonial clock tower and statues of Puerto Cabello at night",
  ),
  courtyard: photo(
    courtyard.url,
    "Casa Guipuzcoana's colonnaded interior courtyard with rattan chairs beneath a crystal chandelier",
  ),
  courtyardWide: photo(
    courtyardWide.url,
    "Sunlight falling across the courtyard tiles between cream colonial columns",
  ),
  corridorArt: photo(
    corridorArt.url,
    "A gallery corridor of the hotel with paintings on easels and a dark timber beam ceiling",
  ),
  roomBed: photo(
    roomBed.url,
    "A guest room bed dressed in white linen with folded towels and soft lamplight",
  ),
  robeDetail: photo(
    robeDetail.url,
    "A white bathrobe embroidered with the Casa Guipuzcoana crest",
  ),
  doors: photo(doors.url, "Dark panelled colonial doors opening onto warm interior light"),
  aerial: photo(
    aerial.url,
    "Aerial view of the terracotta-roofed colonial house, its gardens and the bay of Puerto Cabello",
  ),
  poolUmbrella: photo(
    poolUmbrella.url,
    "The hotel pool with a Casa Guipuzcoana parasol and sculptural loungers under a blue sky",
  ),
  poolLoungers: photo(
    poolLoungers.url,
    "White in-water loungers along the edge of the turquoise pool",
  ),
  beachClub: photo(
    beachClub.url,
    "Sun loungers, a parasol and rolled striped towels at the beach club",
  ),
  facadePalm: photo(
    facadePalm.url,
    "Whitewashed façade with dark timber shutters framed by a palm frond",
  ),
} as const;

export const logo = {
  light: logoLight.url,
  dark: logoDark.url,
};

export const film = {
  rooms: { src: filmRooms.url, poster: img.roomBed.src, label: "Inside the house" },
  aerial: { src: filmAerial.url, poster: img.aerial.src, label: "Puerto Cabello from above" },
  pool: { src: filmPool.url, poster: img.poolLoungers.src, label: "Water and light" },
  facade: { src: filmFacade.url, poster: img.facadePalm.src, label: "Architecture" },
};
