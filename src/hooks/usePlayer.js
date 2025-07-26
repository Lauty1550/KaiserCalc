import { COUNTRY_MAP } from "../data/constants";
import Personajes from "../data/Personajes.json";
import { useEffect, useState } from "react";
import Characters from "../data/Characters.json";
import { buildCloudinaryUrl } from "../functions/buildCloudinaryUrl";

export function usePlayer() {
  const [groupByCountry, setGroupByCountry] = useState([]);
  const [groupByCharacter, setGroupByCharecter] = useState([]);

  useEffect(() => {
    const agrupadosPorPais = groupPlayersByCountry();
    groupPlayersByCharacter(agrupadosPorPais);
  }, []);

  function groupPlayersByCountry() {
    console.log("Se ejecuta map por pais");

    const map = new Map();
    const players = Object.values(Personajes.Jugadores);

    for (const player of players) {
      if (!map.has(player.nationality_id)) {
        map.set(player.nationality_id, []);
      }
      map.get(player.nationality_id).push(player);
    }

    const agrupadosPorPais = Array.from(map, ([nationality_id, jugadores]) => ({
      nationality_id,
      jugadores,
    }));

    setGroupByCountry(agrupadosPorPais);
    return agrupadosPorPais;
  }

  function groupPlayersByCharacter(agrupadosPorPais) {
    console.log("Se ejecuta map por personaje");
    const map = new Map();

    for (const country of agrupadosPorPais) {
      for (const player of country.jugadores) {
        if (!map.has(player.character_id)) {
          map.set(player.character_id, []);
        }
        map.get(player.character_id).push(player);
      }
    }

    const agrupadosPorPersonaje = Array.from(
      map,
      ([character_id, jugadores]) => ({
        character_id,
        jugadores,
      })
    );

    setGroupByCharecter(agrupadosPorPersonaje);
  }

  function getCountryOptions() {
    return groupByCountry
      .map(({ nationality_id, jugadores }) => ({
        value: nationality_id,
        label: COUNTRY_MAP[nationality_id] || `ID ${nationality_id}`,
        count: jugadores.length,
        image: `https://res.cloudinary.com/dq5ffjlgd/image/upload/Banderas/${nationality_id}-flag.png`,
      }))
      .sort((a, b) => b.count - a.count);
  }

  function getCharacterOptions(nationalityId) {
    if (!nationalityId) return [];

    const country = groupByCountry.find(
      (c) => c.nationality_id === nationalityId
    );
    if (!country) return [];

    const characterIds = new Set(country.jugadores.map((p) => p.character_id));

    return groupByCharacter
      .filter(({ character_id }) => characterIds.has(character_id))
      .map(({ character_id, jugadores }) => ({
        value: character_id,
        label: Characters[character_id] || `ID ${character_id}`,
        count: jugadores.length,
        image: `https://res.cloudinary.com/dq5ffjlgd/image/upload/Jugadores/Preview/${character_id}.png`,
      }))
      .sort((a, b) => b.count - a.count);
  }

  function getVariantOptions(selection) {
    if (!selection) return [];

    const characterId = selection[1].value;
    const country = selection[0].label;
    const characterName = selection[1].label;

    const character = groupByCharacter.find(
      (c) => c.character_id === characterId
    );

    if (!character) return [];

    const variants = character.jugadores.map(({ id, nick_name, total }) => ({
      value: id,
      label: nick_name.en,
      total,
      image: buildCloudinaryUrl({
        nickName: nick_name.en,
        character: characterName,
        country,
      }),
    }));

    const seen = new Set();
    const unique = variants.filter((v) => {
      if (seen.has(v.label)) return false;
      seen.add(v.label);
      return true;
    });

    return unique.sort((a, b) => b.total - a.total);
  }

  //   return character.jugadores
  //     .map(({ id, nick_name, total }) => ({
  //       value: id,
  //       label: nick_name.en,
  //       total: total,
  //       image: buildCloudinaryUrl({
  //         nickName: nick_name.en,
  //         character: characterName,
  //         country,
  //       }),
  //     }))
  //     .sort((a, b) => b.total - a.total);
  // }

  return {
    getCountryOptions,
    getCharacterOptions,
    getVariantOptions,
  };
}
