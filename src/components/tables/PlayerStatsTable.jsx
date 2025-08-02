import "../../css/PlayerStats.css";
import { usePlayerStats } from "../../hooks/usePlayerStats";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";
import { usePlayerTable } from "../../hooks/usePlayerTable";
import { usePlayerContext } from "../../context/PlayerContext";

export function PlayerStatsTable() {
  const { player, stats, statsET, limitBreak } = usePlayerContext();
  const { formatStat, attack, defence, physical } = usePlayerStats();
  const { showHiddenAbility, showSkills } = usePlayerTable();

  if (!player || statsET.length < 1) return <p>Cargando jugador...</p>;

  const isGK = player.positions == "GK";

  return (
    <div className="arrow-buttons">
      <ArrowLeft onClick={showHiddenAbility} />
      <section className="player-stats-container">
        <section className="stamina-bar">
          <span className="stamina-title">⚡ Stamina</span>
          <span className="stamina-value">
            {player.stats?.Stamina.Base + statsET.Stamina}
          </span>
        </section>

        <div className="nav"></div>

        <section className="summary">
          <h4 className="total">Total: {player.total ?? "--"}</h4>

          {/* GK */}
          {isGK ? (
            <>
              <div className="stat-block">
                <div className="category-header stat-title">Goalkeeper</div>

                <div className="stat-item">
                  <div className="stat-name">Catch</div>
                  {formatStat({
                    stat: player.stats?.Catch,
                    bool: true,
                    atributo: "Catch",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Catch}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Punch</div>
                  {formatStat({
                    stat: player.stats?.Punch,
                    bool: true,
                    atributo: "Punch",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Punch}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Attack */}
              <div className="stat-block">
                <div className="category-header stat-title">
                  Attack
                  <span className="category-total">{attack}</span>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Dribble</div>
                  {formatStat({
                    stat: player.stats?.Dribble,
                    bool: true,
                    atributo: "Dribble",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Dribble + statsET.Dribble}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Shot</div>
                  {formatStat({
                    stat: player.stats?.Shot,
                    bool: true,
                    atributo: "Shot",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Shot + statsET.Shot}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Pass</div>
                  {formatStat({
                    stat: player.stats?.Pass,
                    bool: true,
                    atributo: "Pass",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Pass + +statsET.Pass}
                  </div>
                </div>
              </div>

              {/* Defence */}
              <div className="stat-block">
                <div className="category-header stat-title">
                  Defence
                  <span className="category-total">{defence}</span>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Tackle</div>
                  {formatStat({
                    stat: player.stats?.Tackle,
                    bool: true,
                    atributo: "Tackle",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Tackle + statsET.Tackle}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Block</div>
                  {formatStat({
                    stat: player.stats?.Block,
                    bool: true,
                    atributo: "Block",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Block + statsET.Block}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Intercept</div>
                  {formatStat({
                    stat: player.stats?.Intercept,
                    bool: true,
                    atributo: "Intercept",
                  })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Intercept + statsET.Intercept}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Physical */}
          <div className="stat-block">
            <div className="category-header stat-title">
              Physical
              <span className="category-total">{physical}</span>
            </div>

            <div className="stat-item">
              <div className="stat-name">Speed</div>
              {formatStat({
                stat: player.stats?.Speed,
                bool: true,
                atributo: "Speed",
              })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Speed + statsET.Speed}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Power</div>
              {formatStat({
                stat: player.stats?.Power,
                bool: true,
                atributo: "Power",
              })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Power + statsET.Power}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Technique</div>
              {formatStat({
                stat: player.stats?.Technique,
                bool: true,
                atributo: "Technique",
              })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Technique + statsET.Technique}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ArrowRight onClick={showSkills} />
    </div>
  );
}
