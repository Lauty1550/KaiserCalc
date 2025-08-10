import { useEffect, useState } from "react";

import "../css/PlayerStats.css";
import { usePlayerContext } from "../context/PlayerContext";

export function usePlayerStats() {
  const [attack, setAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [saving, setSaving] = useState(0);

  const {
    player,
    setStats,
    statsET,
    setStatsET,
    limitBreak,
    setLimitBreak,
    evolutionTraining,
    setEvolutionTraining,
  } = usePlayerContext();

  useEffect(() => {
    console.log("Montando usePlayerStats");
  }, []);

  useEffect(() => {
    if (!player) return;

    mapStats();
    setEvolutionTraining(0);
    setLimitBreak(false);
  }, [player]);

  useEffect(() => {
    console.log("cambio");
  }, [statsET]);

  useEffect(() => {
    sumEvolutionTraining();
  }, [limitBreak, evolutionTraining]);

  const formatStat = ({ stat, bool, atributo }) => {
    if (!stat.Base || !stat.Bonus) return;
    let base = stat.Base;
    base += statsET[atributo];
    const bonus = stat.Bonus;
    const total = base + bonus;

    // console.log("atributo: ", atributo, " valor: ", stat, " display ", base);
    if (bool) {
      return (
        <div
          className={
            statsET[atributo] > 1000
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
    const statsETAux = { ...statsAux };

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

  // function sumStats() {
  //   if (!player) return;

  //   const data = { ...stats };

  //   if (!lbApplied) {
  //     for (const atributo in data) {
  //       data[atributo] = data[atributo] + 1000;
  //     }

  //     setLbApplied(true);
  //     setStats(data);
  //   } else {
  //     for (const atributo in data) {
  //       data[atributo] = data[atributo] - 1000;
  //     }
  //     setLbApplied(false);
  //     setStats(data);
  //   }
  // }

  function sumEvolutionTraining() {
    if (!player) return;
    let lb = 0;
    if (limitBreak) {
      lb = 1000;
    }

    const isGK = player.positions == "GK";
    const data = { ...statsET };

    if (evolutionTraining === 0) {
      for (const atributo in data) {
        if (atributo == "Stamina") {
          data[atributo] = 0;
          continue;
        }
        data[atributo] = 0 + lb;
      }
    }

    if (evolutionTraining === 1) {
      data["Stamina"] = 100;
    }

    if (evolutionTraining === 2) {
      data["Technique"] = 1200 + lb;
      data["Power"] = 1200 + lb;
      data["Speed"] = 1200 + lb;
    }

    if (evolutionTraining === 3) {
      data["Technique"] = 2400 + lb;
      data["Power"] = 2400 + lb;
      data["Speed"] = 2400 + lb;
    }

    if (evolutionTraining === 4) {
      data["Technique"] = 2400 + lb;
      data["Power"] = 2400 + lb;
      data["Speed"] = 2400 + lb;
      if (isGK) {
        data["Catch"] = 1200 + lb;
        data["Punch"] = 1200 + lb;
      } else {
        data["Dribble"] = 1200 + lb;
        data["Shot"] = 1200 + lb;
        data["Pass"] = 1200 + lb;
        data["Tackle"] = 1200 + lb;
        data["Block"] = 1200 + lb;
        data["Intercept"] = 1200 + lb;
      }
    }

    setStatsET(data);
  }

  return {
    formatStat,
    attack,
    defence,
    physical,
    saving,
    evolutionTraining,
    setSaving,
  };
}
