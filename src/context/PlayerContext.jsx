import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [id, setId] = useState(0);
  const [player, setPlayer] = useState(null);
  const [attack, setAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [teamSkill, setTeamSkill] = useState([]);
  const [passive, setPassive] = useState([]);
  const [hiddenAbilities, setHiddenAbilities] = useState([]);
  const [viewMode, setViewMode] = useState("stats");
  const [bonusTotal, setBonusTotal] = useState(0);
  const [attackBonus, setAttackBonus] = useState(0);
  const [defenceBonus, setDefenceBonus] = useState(0);
  const [physicalBonus, setPhysicalBonus] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        id,
        setId,
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
        viewMode,
        setViewMode,
        bonusTotal,
        setBonusTotal,
        attackBonus,
        setAttackBonus,
        defenceBonus,
        setDefenceBonus,
        physicalBonus,
        setPhysicalBonus,
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
