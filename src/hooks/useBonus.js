import { useEffect, useState } from "react";
import { usePlayerContext } from "../context/PlayerContext";
import { BALL_CONDITION_MULTIPLIERS } from "../data/constants";

export function useBonus() {
  const [teamSkillBonus, setTeamSkillBonus] = useState("");
  const [bond, setBond] = useState("");
  const [passiveBonus, setPassiveBonus] = useState("");
  const [afinityBonus, setAfinityBonus] = useState(false);
  const [volleyBonus, setVolleyBonus] = useState(false);
  const [headerBonus, setheaderBonus] = useState(false);
  const { setBonusTotal, setShotBonus, setShotType, player } =
    usePlayerContext();

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

    if (!volleyBonus && !headerBonus) {
      setShotType("shot");
      setShotBonus(0);
    }

    if (player?.extra_stats) {
      if (volleyBonus) {
        setShotType("volley");
        const shotBonusAux =
          BALL_CONDITION_MULTIPLIERS[player.extra_stats["Low Ball"]];
        setShotBonus(shotBonusAux);
      }

      if (headerBonus) {
        setShotType("heading");
        const shotBonusAux =
          BALL_CONDITION_MULTIPLIERS[player.extra_stats["High Ball"]];
        setShotBonus(shotBonusAux);
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function resetBonus() {
    setTeamSkillBonus("");
    setBond("");
    setPassiveBonus("");
    setAfinityBonus(false);
    setheaderBonus(false);
    setVolleyBonus(false);
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
    resetBonus,
  };
}
