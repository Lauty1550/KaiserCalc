import { usePlayerContext } from "../../context/PlayerContext";
import "../../css/PlayerStats.css";
import { usePlayerTable } from "../../hooks/usePlayerTable";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";

export function PlayerTeamSkillTable() {
  const { player } = usePlayerContext();
  const { showStats, showHiddenAbility } = usePlayerTable();

  if (!player) return;

  if (!player.team_skills) return <p>Cargando...</p>;

  if (player.passive_skills.length < 1)
    return <p>No hay Pasiva ni Habilidad de equipo disponibles.</p>;

  const { Name: nameTS, Description: descriptionTS } = player.team_skills[0];
  const {
    Name: namePS,
    Description: descriptionPS,
    Link: linkPS,
  } = player.passive_skills[0];

  const urlObj = new URL(linkPS);
  const id = urlObj.searchParams.get("id");

  return (
    <div className="arrow-buttons">
      <ArrowLeft onClick={showStats} />
      <div>
        <section className="team-skill-section">
          <h3 className="skills-header">Team Skill</h3>
          <div className="skill-item">
            <figure className="team-skill-main">
              <img
                src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/team-skill.png"
                className="hidden-ability-icon"
                alt="Team Skill"
              />
              <span className="skill-title">{nameTS.en}</span>
            </figure>
            <p className="skill-description">{descriptionTS.en}</p>
          </div>
        </section>

        <section className="passive-section">
          <h3 className="skills-header">Passive</h3>
          <div className="skill-item">
            <div className="passive-main">
              <img
                src={`https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/passive/${id}-passive.png`}
                className="hidden-ability-icon"
                alt="Passive Skill"
              />
              <span className="skill-title">{namePS.en}</span>
            </div>
            <div className="skill-description">{descriptionPS.en}</div>
          </div>
        </section>
      </div>
      <ArrowRight onClick={showHiddenAbility} />
    </div>
  );
}
