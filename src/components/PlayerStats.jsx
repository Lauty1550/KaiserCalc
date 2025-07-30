import { PlayerTeamSkillTable } from "./PlayerTeamSkillTable";
import { PlayerStatsTable } from "./PlayerStatsTable";
import { PlayerHiddenTable } from "./PlayerHiddenTable";
import "../css/Tables.css";
import "../css/PlayerStatsAnimations.css";
import { useState } from "react";
import { usePlayerStats } from "../hooks/usePlayerStats";

export function PlayerStats({ id }) {
  const {
    player,
    attack,
    defence,
    physical,
    teamSkill,
    hiddenAbilities,
    passive,
  } = usePlayerStats({
    id,
  });

  const [viewMode, setViewMode] = useState("stats");

  return (
    <section className="tablas-container">
      {viewMode === "stats" && (
        <PlayerStatsTable
          player={player}
          attack={attack}
          defence={defence}
          physical={physical}
          onViewModeChange={setViewMode}
        />
      )}

      {viewMode === "skills" && (
        <PlayerTeamSkillTable
          teamSkill={teamSkill}
          passive={passive}
          onViewModeChange={setViewMode}
        />
      )}

      {viewMode === "hidden" && (
        <PlayerHiddenTable
          hiddenAbilities={hiddenAbilities}
          onViewModeChange={setViewMode}
        />
      )}
    </section>
  );
}
