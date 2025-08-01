import { useEffect, useState } from "react";
import { usePlayerContext } from "../context/PlayerContext";

export function useBonus() {
  const [teamSkillBonus, setTeamSkillBonus] = useState();
  const [bond, setBond] = useState();
  const [passiveBonus, setPassiveBonus] = useState();
  const [afinityBonus, setAfinityBonus] = useState(false);
  const [volleyBonus, setVolleyBonus] = useState(false);
  const [headerBonus, setheaderBonus] = useState(false);
  const [shotType, setShotType] = useState("shot");
  const { setBonusTotal } = usePlayerContext();

  function totalBonusCalc() {
    let afinity = 0;
    let bondAux = 0;
    let passiveAux = 0;
    let teamSkillAux = 0;
    if (afinityBonus) {
      afinity = 25;
    }
    if (bond) {
      bondAux = bond;
    }
    if (passiveBonus) {
      passiveAux = passiveBonus;
    }
    if (teamSkillBonus) {
      teamSkillAux = teamSkillBonus;
    }

    const total =
      Number(bondAux) +
      Number(passiveAux) +
      Number(teamSkillAux) +
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
