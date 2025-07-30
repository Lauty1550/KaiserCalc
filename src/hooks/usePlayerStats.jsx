import { useEffect, useState } from "react";
import { usePlayer } from "./usePlayer";
import "../css/PlayerStats.css";

export function usePlayerStats({ id }) {
  const { getPlayerById } = usePlayer();
  const [player, setPlayer] = useState(null);
  const [attack, setAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [teamSkill, setTeamSkill] = useState();
  const [hiddenAbilities, setHiddenAbilities] = useState([]);
  const [passive, setPassive] = useState();

  useEffect(() => {
    if (!id || id === 0) return;
    const jugador = getPlayerById({ id });
    setPlayer(jugador);
  }, [id]);

  useEffect(() => {
    if (!player) return;

    console.log(player);

    const ataque =
      (player.stats?.Dribble?.Base ?? 0) +
      (player.stats?.Shot?.Base ?? 0) +
      (player.stats?.Pass?.Base ?? 0);

    const defensa =
      (player.stats?.Tackle?.Base ?? 0) +
      (player.stats?.Block?.Base ?? 0) +
      (player.stats?.Intercept?.Base ?? 0);

    const fisico =
      (player.stats?.Speed?.Base ?? 0) +
      (player.stats?.Power?.Base ?? 0) +
      (player.stats?.Technique?.Base ?? 0);

    const habilidadEquipo = player.team_skills ?? [];
    const latentes = player.hidden_abilities;
    const pasiva = player.passive_skills;

    setAttack(ataque);
    setDefence(defensa);
    setPhysical(fisico);
    setTeamSkill(habilidadEquipo);
    setHiddenAbilities(latentes);
    setPassive(pasiva);
  }, [player]);

  const formatStat = ({ stat, bool }) => {
    const base = stat?.Base ?? 0;
    const bonus = stat?.Bonus ?? 0;
    const total = base + bonus;
    if (bool) {
      return (
        <div className="stat-values">
          {`${base} `}
          <span className="bonus">{`+ ${bonus}`} </span>
        </div>
      );
    }
    return total;
  };

  return {
    player,
    attack,
    defence,
    physical,
    teamSkill,
    hiddenAbilities,
    passive,
    formatStat,
  };
}
