import { useEffect, useState } from "react";
import { usePlayer } from "./usePlayer";
import "../css/PlayerStats.css";
import { usePlayerContext } from "../context/PlayerContext";

export function usePlayerStats() {
  const { getPlayerById } = usePlayer();
  const [evolutionTraining, setEvolutionTraining] = useState(0);
  const [limitBreak, setLimitBreak] = useState(false);
  const [lbApplied, setLbApplied] = useState(false);
  const [attack, setAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [saving, setSaving] = useState(0);

  const { id, player, setPlayer, stats, setStats } = usePlayerContext();

  useEffect(() => {
    if (!id || id === 0) return;
    const jugador = getPlayerById({ id });
    setPlayer(jugador);
  }, [id]);

  useEffect(() => {
    if (!player) return;

    console.log("usePlayerStats Player ", player);
    mapStats();
  }, [player]);

  useEffect(() => {
    sumStats();
  }, [evolutionTraining, limitBreak]);

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

  function mapStats() {
    if (!player) return;

    const data = player.stats;
    const statsAux = {};

    for (const atributo in data) {
      const valores = data[atributo];
      statsAux[atributo] = valores.Base + valores.Bonus;
    }

    const ataque = statsAux["Shot"] + statsAux["Dribble"] + statsAux["Pass"];
    const defensa =
      statsAux["Tackle"] + statsAux["Block"] + statsAux["Intercept"];
    const fisico =
      statsAux["Speed"] + statsAux["Power"] + statsAux["Technique"];

    setAttack(ataque);
    setDefence(defensa);
    setPhysical(fisico);
    setStats(statsAux);
    return;
  }

  function handleLimitBreak() {
    setLimitBreak(!limitBreak);
  }

  function sumStats() {
    if (!player) return;

    const data = { ...stats };

    if (!lbApplied) {
      for (const atributo in data) {
        data[atributo] = data[atributo] + 1000;
      }
      setLbApplied(true);
      setStats(data);
      return;
    }

    if (lbApplied) {
      for (const atributo in data) {
        data[atributo] = data[atributo] - 1000;
      }
      setLbApplied(false);
      setStats(data);
      return;
    }
  }

  return {
    formatStat,
    attack,
    defence,
    physical,
    saving,
    setLimitBreak,
    setEvolutionTraining,
    handleLimitBreak,
    limitBreak,
  };
}
