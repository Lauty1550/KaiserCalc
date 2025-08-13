import "../../../css/PlayerStats.css";
import { usePlayerStats } from "../../../hooks/usePlayerStats";
import { ArrowLeft } from "../../ArrowLeft";
import { ArrowRight } from "../../ArrowRight";
import { usePlayerTable } from "../../../hooks/usePlayerTable";
import { usePlayerContext } from "../../../context/PlayerContext";
import { StatsCategory } from "./StatsCategory";
import { useTranslation } from "react-i18next";

export function PlayerStatsTable() {
  const { player, statsET, evolutionTraining } = usePlayerContext();
  const { saving, attack, defence, physical } = usePlayerStats();
  const { showHiddenAbility, showSkills } = usePlayerTable();
  const { t } = useTranslation("table");

  if (!player || statsET.length < 1) return <p>Cargando jugador...</p>;

  const isGK = player.positions == "GK";

  return (
    <div className="arrow-buttons">
      <section className="player-stats-container">
        <header className="table-header">
          <ArrowLeft onClick={showHiddenAbility} />
          <h2 className="table-title"> Stats</h2>
          <ArrowRight onClick={showSkills} />
        </header>

        <section className="stamina-bar">
          <span className="stamina-title">⚡ {t("stamina")}</span>
          <span
            className={`${
              evolutionTraining > 0 ? "evolution-color" : "stamina-value"
            }`}
          >
            {player.stats?.Stamina.Base + statsET.Stamina}
          </span>
        </section>

        <div className="nav"></div>

        <section className="summary">
          {/* <h4 className="total">Total: {player.total ?? "--"}</h4> */}

          {/* GK */}
          {isGK ? (
            <StatsCategory
              title={t("saving")}
              total={saving}
              statsList={[
                { name: t("catch"), key: "Catch" },
                { name: t("punch"), key: "Punch" },
              ]}
            />
          ) : (
            <>
              {/* Attack */}
              <StatsCategory
                title={t("attack")}
                total={attack}
                statsList={[
                  { name: t("dribble"), key: "Dribble" },
                  { name: t("shot"), key: "Shot" },
                  { name: t("pass"), key: "Pass" },
                ]}
              />

              {/* Defence */}
              <StatsCategory
                title={t("defence")}
                total={defence}
                statsList={[
                  { name: t("tackle"), key: "Tackle" },
                  { name: t("block"), key: "Block" },
                  { name: t("intercept"), key: "Intercept" },
                ]}
              />
            </>
          )}

          {/* Physical */}
          <StatsCategory
            title={t("physical")}
            total={physical}
            statsList={[
              { name: t("speed"), key: "Speed" },
              { name: t("power"), key: "Power" },
              { name: t("technique"), key: "Technique" },
            ]}
          />

          {/* High, Low Ball */}
          <footer className="stat-block">
            <section className="stat-item">
              <span className="stat-name">{t("low_ball")}</span>
              <output className="stat-total">
                {player.extra_stats["Low Ball"]}
              </output>
              <span className="stat-name">{t("high_ball")}</span>
              <output className="stat-total">
                {player.extra_stats["High Ball"]}
              </output>
            </section>
          </footer>
        </section>
      </section>
    </div>
  );
}
