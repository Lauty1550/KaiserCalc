import { useEffect, useState } from "react";
import { usePlayerContext } from "../context/PlayerContext";

export function useBonus() {
  const [teamSkillBonus, setTeamSkillBonus] = useState(0);
  const [bond, setBond] = useState(0);
  const [passiveBonus, setPassiveBonus] = useState(0);
  const [afinityBonus, setAfinityBonus] = useState(false);
  const [volleyBonus, setVolleyBonus] = useState(false);
  const [headerBonus, setheaderBonus] = useState(false);
  const [shotType, setShotType] = useState("shot");

  const { setBonusTotal, setAttackBonus, setDefenceBonus, setPhysicalBonus } =
    usePlayerContext();

  function totalBonusCalc() {
    let afinity = 0;
    if (afinityBonus) {
      afinity = 25;
    }
    const total =
      Number(bond) +
      Number(passiveBonus) +
      Number(teamSkillBonus) +
      Number(afinity);

    setBonusTotal(total);
  }

  useEffect(() => {
    totalBonusCalc();
  }, [
    teamSkillBonus,
    bond,
    passiveBonus,
    afinityBonus,
    volleyBonus,
    headerBonus,
  ]);

  function handleChange(e, setter) {
    const val = e.target.value;

    if (val === "" || /^[0-9]+$/.test(val)) {
      setter(val);
    }
  }

  return {
    handleChange,
    teamSkillBonus,
    setTeamSkillBonus,
    bond,
    setBond,
    passiveBonus,
    setPassiveBonus,
    afinityBonus,
    setAfinityBonus,
    headerBonus,
    setheaderBonus,
    volleyBonus,
    setVolleyBonus,
  };
}
