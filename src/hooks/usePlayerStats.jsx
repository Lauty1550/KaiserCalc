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
  const [max, setMax] = useState(false);

  const { id, player, setPlayer, stats, setStats, statsET, setStatsET } =
    usePlayerContext();

  useEffect(() => {
    if (!id || id === 0) return;
    const jugador = getPlayerById({ id });
    setPlayer(jugador);
  }, [id]);

  useEffect(() => {
    if (!player) return;

    mapStats();
  }, [player]);

  useEffect(() => {
    sumStats();
  }, [limitBreak]);

  useEffect(() => {
    sumEvolutionTraining();
  }, [evolutionTraining]);

  useEffect(() => {
    handleMax();
  }, [max]);

  const formatStat = ({ stat, bool, atributo }) => {
    let base = stat?.Base ?? 0;
    base += statsET[atributo];
    const bonus = stat?.Bonus ?? 0;
    const total = base + bonus;
    if (bool) {
      return (
        <div
          className={
            statsET[atributo] > 0
              ? "stat-values evolution-color"
              : "stat-values"
          }
        >
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
    const statsETAux = {};

    for (const atributo in data) {
      const valores = data[atributo];
      statsAux[atributo] = valores.Base + valores.Bonus;
      statsETAux[atributo] = 0;
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
    setStatsET(statsETAux);
    return;
  }

  function handleLimitBreak() {
    setLimitBreak(!limitBreak);
  }

  function handleEvolutionTraining() {
    if (evolutionTraining < 4) {
      setEvolutionTraining((prev) => prev + 1);
    } else setEvolutionTraining(0);
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
    } else {
      for (const atributo in data) {
        data[atributo] = data[atributo] - 1000;
      }
      setLbApplied(false);
      setStats(data);
    }
  }

  function sumEvolutionTraining() {
    if (!player) return;

    const isGK = player.positions == "GK";
    const data = { ...statsET };

    if (evolutionTraining === 0) {
      for (const atributo in data) {
        data[atributo] = 0;
      }
    }

    if (evolutionTraining === 1) {
      data["Stamina"] = 100;
    }

    if (evolutionTraining === 2) {
      data["Technique"] = 1200;
      data["Power"] = 1200;
      data["Speed"] = 1200;
    }

    if (evolutionTraining === 3) {
      data["Technique"] = 2400;
      data["Power"] = 2400;
      data["Speed"] = 2400;
    }

    if (evolutionTraining === 4) {
      data["Technique"] = 2400;
      data["Power"] = 2400;
      data["Speed"] = 2400;
      if (isGK) {
        data["Catch"] = 1200;
        data["Punch"] = 1200;
      } else {
        data["Dribble"] = 1200;
        data["Shot"] = 1200;
        data["Pass"] = 1200;
        data["Tackle"] = 1200;
        data["Block"] = 1200;
        data["Intercept"] = 1200;
      }
    }

    setStatsET(data);
  }

  function handleMax() {
    if (max) {
      setLimitBreak(true);
      setEvolutionTraining(4);
    } else {
      setLimitBreak(false);
      setEvolutionTraining(0);
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
    handleEvolutionTraining,
    evolutionTraining,
    max,
    setMax,
  };
}
