import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [id, setId] = useState(0);
  const [player, setPlayer] = useState(null);
  const [stats, setStats] = useState([]);
  const [statsET, setStatsET] = useState([]);
  const [viewMode, setViewMode] = useState("stats");
  const [bonusTotal, setBonusTotal] = useState(0);
  const [shotBonus, setShotBonus] = useState(0);
  const [shotType, setShotType] = useState("shot");
  const [attackBonus, setAttackBonus] = useState(0);
  const [physicalBonus, setPhysicalBonus] = useState(0);
  const [limitBreak, setLimitBreak] = useState(false);
  const [evolutionTraining, setEvolutionTraining] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        id,
        setId,
        player,
        setPlayer,
        viewMode,
        setViewMode,
        stats,
        setStats,
        bonusTotal,
        setBonusTotal,
        statsET,
        setStatsET,
        limitBreak,
        setLimitBreak,
        evolutionTraining,
        setEvolutionTraining,
        shotBonus,
        setShotBonus,
        attackBonus,
        setAttackBonus,
        physicalBonus,
        setPhysicalBonus,
        shotType,
        setShotType,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePlayerContext() {
  return useContext(PlayerContext);
}
