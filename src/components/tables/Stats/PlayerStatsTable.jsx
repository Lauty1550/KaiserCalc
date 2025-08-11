import "../../../css/PlayerStats.css";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import { ArrowLeft } from "../../ArrowLeft";
import { ArrowRight } from "../../ArrowRight";
import { usePlayerTable } from "../../../hooks/usePlayerTable";
import { usePlayerContext } from "../../../context/PlayerContext";
import { StatsCategory } from "./StatsCategory";

export function PlayerStatsTable() {
  const { player, statsET } = usePlayerContext();
  const { saving, attack, defence, physical } = usePlayerStats();
  const { showHiddenAbility, showSkills } = usePlayerTable();

  if (!player || statsET.length < 1) return <p>Cargando jugador...</p>;

  const isGK = player.positions == "GK";

  return (
    <div className="arrow-buttons">
      <section className="player-stats-container">
        <header className="table-header">
          <ArrowLeft onClick={showHiddenAbility} />
          <h2 className="table-title"> Stats</h2>
          <ArrowRight onClick={showSkills} />
        </header>

        <section className="stamina-bar">
          <span className="stamina-title">⚡ Stamina</span>
          <span className="stamina-value">
            {player.stats?.Stamina.Base + statsET.Stamina}
          </span>
        </section>

        <div className="nav"></div>

        <section className="summary">
          {/* <h4 className="total">Total: {player.total ?? "--"}</h4> */}

          {/* GK */}
          {isGK ? (
            <StatsCategory
              title="Saving"
              total={saving}
              statsList={[
                { name: "Catch", key: "Catch" },
                { name: "Punch", key: "Punch" },
              ]}
            />
          ) : (
            <>
              {/* Attack */}
              <StatsCategory
                title="Attack"
                total={attack}
                statsList={[
                  { name: "Dribble", key: "Dribble" },
                  { name: "Shot", key: "Shot" },
                  { name: "Pass", key: "Pass" },
                ]}
              />

              {/* Defence */}
              <StatsCategory
                title="Defence"
                total={defence}
                statsList={[
                  { name: "Tackle", key: "Tackle" },
                  { name: "Block", key: "Block" },
                  { name: "Intercept", key: "Intercept" },
                ]}
              />
            </>
          )}

          {/* Physical */}
          <StatsCategory
            title="Physical"
            total={physical}
            statsList={[
              { name: "Speed", key: "Speed" },
              { name: "Power", key: "Power" },
              { name: "Technique", key: "Technique" },
            ]}
          />

          {/* High, Low Ball */}
          <footer className="stat-block">
            <section className="stat-item">
              <span className="stat-name">Low Ball</span>
              <output className="stat-total">
                {player.extra_stats["Low Ball"]}
              </output>
              <span className="stat-name">High Ball</span>
              <output className="stat-total">
                {player.extra_stats["High Ball"]}
              </output>
            </section>
          </footer>
        </section>
      </section>
    </div>
  );
}
