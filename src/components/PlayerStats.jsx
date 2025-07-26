import { usePlayerStats } from "../hooks/usePlayerStats";
import { PlayerTeamSkillTable } from "./PlayerTeamSkillTable";
import { PlayerStatsTable } from "./PlayerStatsTable";
import { PlayerHiddenTable } from "./PlayerHiddenTable";
import "../css/Tables.css";

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

  return (
    <section className="tablas-container">
      <PlayerStatsTable
        player={player}
        attack={attack}
        defence={defence}
        physical={physical}
      />
      <br />

      <PlayerTeamSkillTable teamSkill={teamSkill} passive={passive} />
      <br />

      <PlayerHiddenTable hiddenAbilities={hiddenAbilities} />
    </section>
  );
}
