import { COUNTRY_MAP } from "../data/constants";
import Characters from "../data/Characters.json";

export function buildCloudinaryUrl({ nickName, country, character }) {
  //   const countryName = COUNTRY_MAP[country];
  const countryName = country;

  //   const characterName = Characters[character.toString()];

  const characterName = character;

  const baseUrl = `https://res.cloudinary.com/dq5ffjlgd/image/upload/Jugadores/${countryName}/${characterName}`;

  return `${baseUrl}/${nickName}.png`;
}
