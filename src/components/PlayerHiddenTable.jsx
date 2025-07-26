export function PlayerHiddenTable({ hiddenAbilities }) {
  if (!Array.isArray(hiddenAbilities) || hiddenAbilities.length === 0) {
    return <p>No hay habilidades ocultas disponibles.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name: Descripción:</th>
        </tr>
      </thead>
      <tbody>
        {hiddenAbilities.map((ability, index) => {
          const name = ability.Name?.en || "Sin nombre";
          const description = ability.Description?.en || "Sin descripción";

          return (
            <tr key={index}>
              <td>
                <strong>{name}</strong>: {description}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
