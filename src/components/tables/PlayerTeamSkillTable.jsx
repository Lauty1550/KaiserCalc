import { useTranslation } from "react-i18next";
import { usePlayerContext } from "../../context/PlayerContext";
import "../../css/PlayerStats.css";
import { usePlayerTable } from "../../hooks/usePlayerTable";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";

export function PlayerTeamSkillTable() {
  const { player } = usePlayerContext();
  const { showStats, showHiddenAbility } = usePlayerTable();
  const { i18n } = useTranslation();
  const languaje = i18n.language;

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
      <div>
        <header className="table-header">
          <ArrowLeft onClick={showStats} />
          <h2 className="table-title-skills"> Ski</h2>
          <ArrowRight onClick={showHiddenAbility} />
        </header>
        <section className="team-skill-section">
          <h3 className="skills-header">Team Skill</h3>
          <div className="skill-item">
            <figure className="team-skill-main">
              <img
                src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/team-skill.png"
                className="hidden-ability-icon"
                alt="Team Skill"
              />
              <span className="skill-title">{nameTS[languaje]}</span>
            </figure>
            <p className="skill-description">{descriptionTS[languaje]}</p>
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
              <span className="skill-title">{namePS[languaje]}</span>
            </div>
            <div className="skill-description">{descriptionPS[languaje]}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
