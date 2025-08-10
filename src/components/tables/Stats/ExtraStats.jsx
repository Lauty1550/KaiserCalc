import { usePlayerContext } from "../../../context/PlayerContext";
import "../../../css/PlayerStats.css";

export function ExtraStats() {
  const { player } = usePlayerContext();
  return (
    <footer className="stat-block">
      <section className="stat-item">
        <span className="stat-name">Low Ball</span>
        <output className="stat-total">{player.extra_stats["Low Ball"]}</output>
        <span className="stat-name">High Ball</span>
        <output className="stat-total">
          {player.extra_stats["High Ball"]}
        </output>
      </section>
    </footer>
  );
}
