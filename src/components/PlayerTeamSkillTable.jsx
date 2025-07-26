export function PlayerTeamSkillTable({ teamSkill, passive }) {
  if (!teamSkill) return <p>Cargando...</p>;

  if (passive.length < 1)
    return <p>No hay Pasiva ni Habilidad de equipo disponibles.</p>;

  const {
    Name: nameTS,
    Description: descriptionTS,
    Link: linkTS,
  } = teamSkill[0];
  const { Name: namePS, Description: descriptionPS, Link: linkPS } = passive[0];

  return (
    <main>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Team Skill</strong>
            </td>
          </tr>
          <tr>
            <td>{nameTS.en}</td>
          </tr>
          <tr>
            <td>{descriptionTS.en}</td>
          </tr>
          <tr>
            <td>{namePS.en}</td>
          </tr>
          <tr>
            <td>{descriptionPS.en}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
