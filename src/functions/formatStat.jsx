export function formatStat2({ stat, atributo, statsET, bool }) {
  if (stat?.Base == null || stat?.Bonus == null || statsET[atributo] == null)
    return null;

  let base = stat.Base + (statsET[atributo] || 0);
  const bonus = stat.Bonus;
  const total = base + bonus;

  if (bool) {
    return (
      <div
        className={
          (statsET[atributo] || 0) > 1000
            ? "stat-values evolution-color"
            : "stat-values"
        }
      >
        {`${base} `}
        <span className="bonus">{`+ ${bonus}`} </span>
      </div>
    );
  }

  return total;
}
