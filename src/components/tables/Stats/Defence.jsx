import { usePlayerContext } from "../../../context/PlayerContext";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import "../../../css/PlayerStats.css";

export function Defence() {
  const { player, limitBreak, stats, statsET } = usePlayerContext();
  const { formatStat, defence } = usePlayerStats();
  return (
    <article>
      <section className="stat-block">
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
          >
            {stats.Intercept + statsET.Intercept}
          </div>
        </div>
      </section>
    </article>
  );
}
