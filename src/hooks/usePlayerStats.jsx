import { useEffect } from "react";
import { usePlayer } from "./usePlayer";
import "../css/PlayerStats.css";
import { usePlayerContext } from "../context/PlayerContext";

export function usePlayerStats() {
  const { getPlayerById } = usePlayer();

  const {
    id,
    player,
    setPlayer,
    attack,
    setAttack,
    defence,
    setDefence,
    physical,
    setPhysical,
    teamSkill,
    setTeamSkill,
    passive,
    setPassive,
    hiddenAbilities,
    setHiddenAbilities,
  } = usePlayerContext();

  useEffect(() => {
    if (!id || id === 0) return;
    const jugador = getPlayerById({ id });
    setPlayer(jugador);
  }, [id]);

  useEffect(() => {
    if (!player) return;

    console.log("usePlayerStats Player ", player);

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
