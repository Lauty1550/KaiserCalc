import { usePlayerInGameStats } from "../hooks/usePlayerInGameStats";
import { usePlayerStats } from "../hooks/usePlayerStats";
import { ActionStat } from "./ActionStat";

export function PlayerInGameStats() {
  const { player } = usePlayerStats();
  const { shot, dribble, pass, tackle, block, intercept, punch, catchStat } =
    usePlayerInGameStats({ stats: player?.stats ?? [] });

  const isGK = player?.positions == "GK";

  return (
    <main className="action-container">
      {isGK ? (
        <>
          <ActionStat action="catch" actionLabel="Catch" value={catchStat} />
          <ActionStat action="punch" actionLabel="Punch" value={punch} />
        </>
      ) : (
        <>
          <ActionStat action="shot" actionLabel="Shot" value={shot} />
          <ActionStat action="pass" actionLabel="Pass" value={pass} />
          <ActionStat action="onetwo" actionLabel="OneTwo" value={pass} />
          <ActionStat action="dribble" actionLabel="Dribble" value={dribble} />
          <ActionStat action="block" actionLabel="Block" value={block} />
          <ActionStat
            action="intercept"
            actionLabel="Intercept"
            value={intercept}
          />
          <ActionStat action="tackle" actionLabel="Tackle" value={tackle} />
        </>
      )}
    </main>
  );
}
