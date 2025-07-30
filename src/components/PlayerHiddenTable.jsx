import { useEffect, useState } from "react";
import "../css/Tables.css";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

export function PlayerHiddenTable({ hiddenAbilities, onViewModeChange }) {
  const [viewMode, setViewMode] = useState("hidden");

  useEffect(() => {
    if (onViewModeChange) {
      onViewModeChange(viewMode);
    }
  }, [viewMode, onViewModeChange]);

  useEffect(() => {
    if (!Array.isArray(hiddenAbilities) || hiddenAbilities.length === 0) {
      setViewMode("stats");
    }
  }, []);

  function showStats() {
    setViewMode("stats");
  }

  function showSkills() {
    setViewMode("skills");
  }

  return (
    <div className="arrow-buttons">
      <ArrowLeft onClick={showSkills} />
      <table className="tabla-ha">
        <thead>
          <tr>
            <th className="titulo-tabla-ha">Icon</th>
            <th className="titulo-tabla-ha">Name</th>
            <th className="titulo-tabla-ha">Description</th>
          </tr>
        </thead>
        <tbody>
          {hiddenAbilities.map((ability, index) => {
            const name = ability.Name?.en || "Sin nombre";
            const description = ability.Description?.en || "Sin descripción";
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
              <tr key={index}>
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
      <ArrowRight onClick={showStats} />
    </div>
  );
}
