import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [id, setId] = useState(0);
  const [player, setPlayer] = useState(null);
  const [stats, setStats] = useState([]);
  const [statsET, setStatsET] = useState([]);
  const [viewMode, setViewMode] = useState("stats");
  const [bonusTotal, setBonusTotal] = useState(0);

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
