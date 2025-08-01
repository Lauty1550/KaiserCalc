import { PlayerTeamSkillTable } from "./PlayerTeamSkillTable";
import { PlayerStatsTable } from "./PlayerStatsTable";
import { PlayerHiddenTable } from "./PlayerHiddenTable";
import "../../css/Tables.css";
import "../../css/PlayerStatsAnimations.css";
import { usePlayerContext } from "../../context/PlayerContext";

export function PlayerStats() {
  const { viewMode } = usePlayerContext();

  return (
    <section className="tablas-container">
      {viewMode === "stats" && <PlayerStatsTable />}

      {viewMode === "skills" && <PlayerTeamSkillTable />}

      {viewMode === "hidden" && <PlayerHiddenTable />}
    </section>
  );
}
