import "../../css/Tables.css";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";
import { usePlayerTable } from "../../hooks/usePlayerTable";
import { usePlayerContext } from "../../context/PlayerContext";
import { useTranslation } from "react-i18next";

export function PlayerHiddenTable() {
  const { player } = usePlayerContext();
  const { showSkills, showStats } = usePlayerTable();
  const { i18n } = useTranslation();
  const languaje = i18n.language;

  if (!player) return;

  const hiddenAbilities = player.hidden_abilities;

  return (
    <div className="arrow-buttons">
      <header className="table-header">
        <ArrowLeft onClick={showSkills} />
        <h2 className="table-title-skills"> Ski</h2>
        <ArrowRight onClick={showStats} />
      </header>
      <table className="tabla-ha">
        <thead>
          <tr>
            <th className="titulo-tabla-ha">Icon</th>
            <th className="titulo-tabla-ha">Name</th>
            <th className="titulo-tabla-ha">Description</th>
          </tr>
        </thead>
        <tbody>
          {hiddenAbilities.map((ability) => {
            const name = ability.Name[languaje] || "Sin nombre";
            const description =
              ability.Description[languaje] || "Sin descripción";
            let abilityId = "";

            try {
              const urlObj = new URL(ability.Link);
              abilityId = urlObj.searchParams.get("id") || "Sin ID";
              // eslint-disable-next-line no-unused-vars
            } catch (e) {
              console.error("Link inválido:", ability.Link);
            }

            const iconUrl = `https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/hidden%20ability%20icons/${abilityId}-hidden-evolution.png`;

            return (
              <tr key={abilityId}>
                <td className="elemento-tabla-ha ">
                  <img src={iconUrl} alt={name} className="img-tabla-ha" />
                </td>
                <td className="elemento-tabla-ha name-tabla-ha">{name}</td>
                <td className="elemento-tabla-ha description-tabla-ha">
                  {description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
