import Personajes from "../data/Personajes.json";
import { useEffect, useState } from "react";

export function usePlayer() {
  const [groupByCountry, setGroupByCountry] = useState();
  const [groupByCharacter, setGroupByCharecter] = useState();

  useEffect(() => {
    groupPlayersByCountry();
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
    groupPlayersByCharacter(agrupadosPorPais);
    return;
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

  return { groupByCountry, groupByCharacter };
}
