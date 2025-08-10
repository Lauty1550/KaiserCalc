import { usePlayerContext } from "../../../context/PlayerContext";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import "../../../css/PlayerStats.css";

export function Saving() {
  const { player, limitBreak, stats } = usePlayerContext();
  const { formatStat } = usePlayerStats();

  return (
    <article>
      <section className="stat-block">
        <div className="category-header stat-title">Saving</div>

        <div className="stat-item">
          <div className="stat-name">Catch</div>
          {formatStat({
            stat: player.stats?.Catch,
            bool: true,
            atributo: "Catch",
          })}
          <div
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
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
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
          >
            {stats.Punch}
          </div>
        </div>
      </section>
    </article>
  );
}
