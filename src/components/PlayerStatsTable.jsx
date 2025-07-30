import "../css/PlayerStats.css";
import { usePlayerStats } from "../hooks/usePlayerStats";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { usePlayerTable } from "../hooks/usePlayerTable";
import { usePlayerContext } from "../context/PlayerContext";

export function PlayerStatsTable() {
  const { player, attack, defence, physical } = usePlayerContext();
  const { formatStat } = usePlayerStats();
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
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Catch, bool: false })}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Punch</div>
                  {formatStat({ stat: player.stats?.Punch, bool: true })}
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Punch, bool: false })}
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
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Dribble, bool: false })}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Shot</div>
                  {formatStat({ stat: player.stats?.Shot, bool: true })}
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Shot, bool: false })}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Pass</div>
                  {formatStat({ stat: player.stats?.Pass, bool: true })}
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Pass, bool: false })}
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
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Tackle, bool: false })}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Block</div>
                  {formatStat({ stat: player.stats?.Block, bool: true })}
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Block, bool: false })}
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-name">Intercept</div>
                  {formatStat({ stat: player.stats?.Intercept, bool: true })}
                  <div className="stat-total">
                    {formatStat({ stat: player.stats?.Intercept, bool: false })}
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
              <div className="stat-total">
                {formatStat({ stat: player.stats?.Speed, bool: false })}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Power</div>
              {formatStat({ stat: player.stats?.Power, bool: true })}
              <div className="stat-total">
                {formatStat({ stat: player.stats?.Power, bool: false })}
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-name">Technique</div>
              {formatStat({ stat: player.stats?.Technique, bool: true })}
              <div className="stat-total">
                {formatStat({ stat: player.stats?.Technique, bool: false })}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ArrowRight onClick={showSkills} />
    </div>
  );
}
