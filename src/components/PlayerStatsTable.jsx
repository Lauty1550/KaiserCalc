import { useEffect, useState } from "react";
import "../css/PlayerStats.css";
import { usePlayerStats } from "../hooks/usePlayerStats";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

export function PlayerStatsTable({
  player,
  attack,
  defence,
  physical,
  onViewModeChange,
}) {
  const { formatStat } = usePlayerStats({ id: 0 });
  const [viewMode, setViewMode] = useState("stats");

  useEffect(() => {
    if (onViewModeChange) {
      onViewModeChange(viewMode);
    }
  }, [viewMode, onViewModeChange]);

  if (!player) return <p>Cargando jugador...</p>;

  function showHiddenHability() {
    if (player?.hidden_abilities && player.hidden_abilities.length > 0) {
      setViewMode("hidden");
    }
  }

  function showSkills() {
    setViewMode("skills");
  }
  return (
    <div className="arrow-buttons">
      <ArrowLeft onClick={showHiddenHability} />
      <section className="player-stats-container">
        <section className="stamina-bar">
          <span className="stamina-title">⚡ Stamina</span>
          <span className="stamina-value">
            {formatStat(player.stats?.Stamina)}
          </span>
        </section>

        <section className="summary">
          <h4 className="total">Total: {player.total ?? "--"}</h4>

          {/* Attack */}
          <div className="stat-block">
            <div className="category-header stat-title">
              Attack
              <span className="category-total">{attack}</span>
            </div>
            <div className="stat-item">
              <div className="stat-name">Dribble</div>

              {formatStat(player.stats?.Dribble, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Dribble, false)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Shot</div>

              {formatStat(player.stats?.Shot, true)}

              <div className="stat-total">{formatStat(player.stats?.Shot)}</div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Pass</div>

              {formatStat(player.stats?.Pass, true)}

              <div className="stat-total">{formatStat(player.stats?.Pass)}</div>
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

              {formatStat(player.stats?.Tackle, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Tackle)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Block</div>

              {formatStat(player.stats?.Block, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Block)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Intercept</div>

              {formatStat(player.stats?.Intercept, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Intercept)}
              </div>
            </div>
          </div>

          {/* Physical */}
          <div className="stat-block">
            <div className="category-header stat-title">
              Physical
              <span className="category-total">{physical}</span>
            </div>
            <div className="stat-item">
              <div className="stat-name">Speed</div>

              {formatStat(player.stats?.Speed, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Speed)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Power</div>

              {formatStat(player.stats?.Power, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Power)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-name">Technique</div>

              {formatStat(player.stats?.Technique, true)}

              <div className="stat-total">
                {formatStat(player.stats?.Technique)}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ArrowRight onClick={showSkills} />
    </div>
  );
}
