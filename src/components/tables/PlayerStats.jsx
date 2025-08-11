import { PlayerTeamSkillTable } from "./PlayerTeamSkillTable";
import { PlayerStatsTable } from "./Stats/PlayerStatsTable";
import { PlayerHiddenTable } from "./PlayerHiddenTable";
import "../../css/Tables.css";
import "../../css/PlayerStatsAnimations.css";
import { usePlayerContext } from "../../context/PlayerContext";

export function PlayerStats() {
  const { viewMode } = usePlayerContext();

  return (
    <section className="tablas-container">
      <div style={{ display: viewMode === "stats" ? "block" : "none" }}>
        <PlayerStatsTable />
      </div>

      <div style={{ display: viewMode === "skills" ? "block" : "none" }}>
        <PlayerTeamSkillTable />
      </div>

      <div style={{ display: viewMode === "hidden" ? "block" : "none" }}>
        <PlayerHiddenTable />
      </div>
    </section>
  );
}
