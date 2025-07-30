import { useEffect, useState } from "react";
import { usePlayerStats } from "../hooks/usePlayerStats";

export function usePlayerInGameStats({ stats }) {
  const { formatStat } = usePlayerStats({ id: 0 });

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
  }, [stats]);

  function shootCalc() {
    if (!stats?.Shot || !stats?.Power) return;
    const shotAux = formatStat({ stat: stats.Shot, bool: false });
    const powerAux = formatStat({ stat: stats.Power, bool: false });
    setShot(Math.round(shotAux + powerAux / 2));
  }

  function dribbleCalc() {
    if (!stats?.Dribble || !stats?.Speed) return;
    const dribbleAux = formatStat({ stat: stats.Dribble, bool: false });
    const speedAux = formatStat({ stat: stats.Speed, bool: false });
    setDribble(Math.round(dribbleAux + speedAux / 2));
  }

  function passCalc() {
    if (!stats?.Pass || !stats?.Technique) return;
    const passAux = formatStat({ stat: stats.Pass, bool: false });
    const techAux = formatStat({ stat: stats.Technique, bool: false });
    setPass(Math.round(passAux + techAux / 2));
  }

  function blockCalc() {
    if (!stats?.Block || !stats?.Power) return;
    const blockAux = formatStat({ stat: stats.Block, bool: false });
    const powerAux = formatStat({ stat: stats.Power, bool: false });
    setBlock(Math.round(blockAux + powerAux / 2));
  }

  function interceptCalc() {
    if (!stats?.Intercept || !stats?.Technique) return;
    const intAux = formatStat({ stat: stats.Intercept, bool: false });
    const techAux = formatStat({ stat: stats.Technique, bool: false });
    setIntercept(Math.round(intAux + techAux / 2));
  }

  function tackleCalc() {
    if (!stats?.Tackle || !stats?.Speed) return;
    const tackleAux = formatStat({ stat: stats.Tackle, bool: false });
    const speedAux = formatStat({ stat: stats.Speed, bool: false });
    setTackle(Math.round(tackleAux + speedAux / 2));
  }

  function catchCalc() {
    if (!stats?.Catch || !stats?.Power || !stats?.Technique) return;
    const catchAux = formatStat({ stat: stats.Catch, bool: false });
    const powerAux = formatStat({ stat: stats.Power, bool: false });
    const techAux = formatStat({ stat: stats.Technique, bool: false });
    setCatchStat(Math.round(catchAux + (powerAux + techAux) / 4));
  }

  function punchCalc() {
    if (!stats?.Punch || !stats?.Speed || !stats?.Power) return;
    const punchAux = formatStat({ stat: stats.Punch, bool: false });
    const speedAux = formatStat({ stat: stats.Speed, bool: false });
    const powerAux = formatStat({ stat: stats.Power, bool: false });
    setPunch(Math.round(punchAux + (speedAux + powerAux) / 4));
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
