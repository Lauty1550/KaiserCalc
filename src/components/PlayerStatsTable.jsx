export function PlayerStatsTable({ player, attack, defence, physical }) {
  if (!player) return <p>Cargando jugador...</p>;

  const statsList = [
    { label: "Stamina", value: player.stats?.Stamina?.Base ?? 0 },
    { label: "Total", value: player.total ?? 0 },
    { label: "Attack", value: attack },
    { label: "Dribble", value: player.stats?.Dribble?.Base ?? 0 },
    { label: "Shot", value: player.stats?.Shot?.Base ?? 0 },
    { label: "Pass", value: player.stats?.Pass?.Base ?? 0 },
    { label: "Defence", value: defence },
    { label: "Tackle", value: player.stats?.Tackle?.Base ?? 0 },
    { label: "Block", value: player.stats?.Block?.Base ?? 0 },
    { label: "Intercept", value: player.stats?.Intercept?.Base ?? 0 },
    { label: "Physical", value: physical },
    { label: "Speed", value: player.stats?.Speed?.Base ?? 0 },
    { label: "Power", value: player.stats?.Power?.Base ?? 0 },
    { label: "Technique", value: player.stats?.Technique?.Base ?? 0 },
  ];

  return (
    <main>
      <table>
        <tbody>
          {statsList.map(({ label, value }) => (
            <tr key={label}>
              <td>
                {label}: {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
