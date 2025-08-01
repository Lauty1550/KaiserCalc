import "../../css/PlayerStats.css";
import { usePlayerStats } from "../../hooks/usePlayerStats";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";
import { usePlayerTable } from "../../hooks/usePlayerTable";
import { usePlayerContext } from "../../context/PlayerContext";

export function PlayerStatsTable() {
  const { player, stats } = usePlayerContext();
  const {
    formatStat,
    attack,
    defence,
    physical,
    handleLimitBreak,
    limitBreak,
  } = usePlayerStats();
  const { showHiddenAbility, showSkills } = usePlayerTable();

  if (!player) return <p>Cargando jugador...</p>;

  const isGK = player.positions == "GK";

  return (
    <div className="arrow-buttons">
      <ArrowLeft onClick={showHiddenAbility} />
      <section className="player-stats-container">
        <section className="stamina-bar">
          <span className="stamina-title">⚡ Stamina</span>
          <span className="stamina-value">
            {formatStat({ stat: player.stats?.Stamina, bool: false })}
          </span>
        </section>

        <button onClick={handleLimitBreak}> LB</button>

        <section className="summary">
          <h4 className="total">Total: {player.total ?? "--"}</h4>

          {/* GK */}
          {isGK ? (
            <>
              <div className="stat-block">
                <div className="category-header stat-title">Goalkeeper</div>

                <div className="stat-item">
                  <div className="stat-name">Catch</div>
                  {formatStat({ stat: player.stats?.Catch, bool: true })}
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
                  {formatStat({ stat: player.stats?.Punch, bool: true })}
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
                  {formatStat({ stat: player.stats?.Dribble, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Dribble}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Shot</div>
                  {formatStat({ stat: player.stats?.Shot, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Shot}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Pass</div>
                  {formatStat({ stat: player.stats?.Pass, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Pass}
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
                  {formatStat({ stat: player.stats?.Tackle, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Tackle}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Block</div>
                  {formatStat({ stat: player.stats?.Block, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Block}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Intercept</div>
                  {formatStat({ stat: player.stats?.Intercept, bool: true })}
                  <div
                    className={
                      limitBreak ? "stat-total stat-total-lb" : "stat-total"
                    }
                  >
                    {stats.Intercept}
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
              {formatStat({ stat: player.stats?.Speed, bool: true })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Speed}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Power</div>
              {formatStat({ stat: player.stats?.Power, bool: true })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Power}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Technique</div>
              {formatStat({ stat: player.stats?.Technique, bool: true })}
              <div
                className={
                  limitBreak ? "stat-total stat-total-lb" : "stat-total"
                }
              >
                {stats.Technique}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ArrowRight onClick={showSkills} />
    </div>
  );
}
