import { useEffect, useState } from "react";
import { usePlayerContext } from "../context/PlayerContext";

export function usePlayerInGameStats() {
  const { stats, bonusTotal, statsET } = usePlayerContext();

  const [shot, setShot] = useState(0);
  const [dribble, setDribble] = useState(0);
  const [pass, setPass] = useState(0);
  const [block, setBlock] = useState(0);
  const [intercept, setIntercept] = useState(0);
  const [tackle, setTackle] = useState(0);
  const [catchStat, setCatchStat] = useState(0);
  const [punch, setPunch] = useState(0);

  useEffect(() => {
    shootCalc();
    dribbleCalc();
    passCalc();
    blockCalc();
    interceptCalc();
    tackleCalc();
    catchCalc();
    punchCalc();
  }, [stats, bonusTotal, statsET]);

  function applyBonusTotal(value) {
    const bonus = 1 + bonusTotal / 100;
    const total = value * bonus;
    return Math.round(total);
  }

  function shootCalc() {
    if (!stats?.Shot || !stats?.Power) return;
    const shotAux = stats.Shot + statsET["Shot"];
    const powerAux = stats.Power + statsET["Power"];
    const total = applyBonusTotal(shotAux + powerAux / 2);

    setShot(total);
  }

  function dribbleCalc() {
    if (!stats?.Dribble || !stats?.Speed) return;
    const dribbleAux = stats.Dribble + statsET["Dribble"];
    const speedAux = stats.Speed + statsET["Speed"];
    const total = applyBonusTotal(dribbleAux + speedAux / 2);

    setDribble(total);
  }

  function passCalc() {
    if (!stats?.Pass || !stats?.Technique) return;
    const passAux = stats.Pass + statsET["Pass"];
    const techAux = stats.Technique + +statsET["Technique"];
    const total = applyBonusTotal(passAux + techAux / 2);

    setPass(total);
  }

  function blockCalc() {
    if (!stats?.Block || !stats?.Power) return;
    const blockAux = stats.Block + statsET["Block"];
    const powerAux = stats.Power + statsET["Power"];
    const total = applyBonusTotal(blockAux + powerAux / 2);

    setBlock(total);
  }

  function interceptCalc() {
    if (!stats?.Intercept || !stats?.Technique) return;
    const intAux = stats.Intercept + statsET["Intercept"];
    const techAux = stats.Technique + statsET["Technique"];
    const total = applyBonusTotal(intAux + techAux / 2);

    setIntercept(total);
  }

  function tackleCalc() {
    if (!stats?.Tackle || !stats?.Speed) return;
    const tackleAux = stats.Tackle + statsET["Tackle"];
    const speedAux = stats.Speed + statsET["Speed"];
    const total = applyBonusTotal(tackleAux + speedAux / 2);

    setTackle(total);
  }

  function catchCalc() {
    if (!stats?.Catch || !stats?.Power || !stats?.Technique) return;
    const catchAux = stats.Catch + statsET["Catch"];
    const powerAux = stats.Power + statsET["Power"];
    const techAux = stats.Technique + statsET["Technique"];
    const total = applyBonusTotal(catchAux + (powerAux + techAux) / 4);

    setCatchStat(total);
  }

  function punchCalc() {
    if (!stats?.Punch || !stats?.Speed || !stats?.Power) return;
    const punchAux = stats.Punch + statsET["Punch"];
    const speedAux = stats.Speed + statsET["Speed"];
    const powerAux = stats.Power + statsET["Power"];
    const total = applyBonusTotal(punchAux + (speedAux + powerAux) / 4);

    setPunch(total);
  }

  return {
    shot,
    dribble,
    pass,
    block,
    intercept,
    tackle,
    catchStat,
    punch,
  };
}
