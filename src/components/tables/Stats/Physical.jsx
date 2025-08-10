import { usePlayerContext } from "../../../context/PlayerContext";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import "../../../css/PlayerStats.css";

export function Physical() {
  const { player, limitBreak, stats, statsET } = usePlayerContext();
  const { formatStat, physical } = usePlayerStats();

  return (
    <article>
      <section className="stat-block">
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
          >
            {stats.Technique + statsET.Technique}
          </div>
        </div>
      </section>
    </article>
  );
}
