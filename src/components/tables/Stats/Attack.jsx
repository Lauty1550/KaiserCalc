import { usePlayerContext } from "../../../context/PlayerContext";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import "../../../css/PlayerStats.css";

export function Attack() {
  const { player, limitBreak, stats, statsET } = usePlayerContext();
  const { formatStat, attack } = usePlayerStats();
  return (
    <article>
      <section className="stat-block">
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
          >
            {stats.Pass + +statsET.Pass}
          </div>
        </div>
      </section>
    </article>
  );
}
