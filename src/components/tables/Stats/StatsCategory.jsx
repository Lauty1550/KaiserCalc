import { usePlayerContext } from "../../../context/PlayerContext";
import { formatStat2 } from "../../../functions/formatStat";

export function StatsCategory({ title, total, statsList }) {
  const { player, limitBreak, stats, statsET } = usePlayerContext();

  return (
    <section className="stat-block">
      <div className="category-header stat-title">
        {title}
        <span className="category-total">{total}</span>
      </div>
      {statsList.map(({ name, key }) => (
        <div className="stat-item" key={key}>
          <div className="stat-name">{name}</div>
          {formatStat2({
            stat: player.stats?.[key],
            bool: true,
            atributo: key,
            statsET,
          })}
          <div
            className={limitBreak ? "stat-total stat-total-lb" : "stat-total"}
          >
            {stats[key] + statsET[key]}
          </div>
        </div>
      ))}
    </section>
  );
}
