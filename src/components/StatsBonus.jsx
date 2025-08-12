import { usePlayerContext } from "../context/PlayerContext";
import "../css/Bonus.css";
import "../css/PlayerStats.css";
import { useBonus } from "../hooks/useBonus";
import { useLimits } from "../hooks/useLimits";

export function StatsBonus() {
  const {
    handleChange,
    bond,
    setBond,
    teamSkillBonus,
    setTeamSkillBonus,
    afinityBonus,
    setAfinityBonus,
    passiveBonus,
    setPassiveBonus,
    headerBonus,
    setheaderBonus,
    volleyBonus,
    setVolleyBonus,
    resetBonus,
  } = useBonus();

  const { handleLimitBreak, handleEvolutionTraining } = useLimits();

  const { limitBreak, evolutionTraining } = usePlayerContext();

  return (
    <main className="player-bond">
      <h2 className="h2">Team Effects</h2>

      <section className="bond-section">
        <button
          onClick={handleLimitBreak}
          className={limitBreak ? "stats-buttons lb-active" : "stats-buttons"}
        >
          <img src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/Max-Limit-Break.png" />
        </button>

        <button onClick={handleEvolutionTraining} className="stats-buttons">
          <img
            src={`https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/Evolution-Training-${evolutionTraining}.png`}
          />
        </button>

        <button onClick={resetBonus} className="stats-buttons">
          Reset
        </button>
      </section>

      <section className="bond-section">
        <fieldset className="bonus-container">
          <legend>Team Skill</legend>
          <input
            className="bonus-input"
            id="teamSkillInput"
            type="text"
            value={teamSkillBonus}
            onChange={(e) => handleChange(e, setTeamSkillBonus)}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="0"
            style={{ MozAppearance: "textfield" }}
          />
        </fieldset>

        <fieldset className="bonus-container">
          <legend>Bond</legend>
          <input
            className="bonus-input"
            id="BondInput"
            type="text"
            value={bond}
            onChange={(e) => handleChange(e, setBond)}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="0"
            style={{ MozAppearance: "textfield" }}
          />
        </fieldset>

        <fieldset className="bonus-container">
          <legend>Passive</legend>
          <input
            className="bonus-input"
            id="PassiveInput"
            type="text"
            value={passiveBonus}
            onChange={(e) => handleChange(e, setPassiveBonus)}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="0"
            style={{ MozAppearance: "textfield" }}
          />
        </fieldset>
      </section>

      <section className="bond-section">
        <div className="afinity-bonus">
          <button
            className="afinity-button"
            onClick={() => setAfinityBonus(!afinityBonus)}
          >
            {afinityBonus ? (
              <h3 className="afinity-active">VS</h3>
            ) : (
              <h3>VS</h3>
            )}

            <img
              className="afinity-img"
              src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/color-icon-3.png"
            />
          </button>
        </div>

        <div
          className={volleyBonus ? "ball-type ball-type-active" : "ball-type"}
        >
          <button
            onClick={() => {
              setVolleyBonus(!volleyBonus);
              setheaderBonus(false);
            }}
          >
            <img src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Match/volley-icon.png" />
          </button>
        </div>

        <div
          className={headerBonus ? "ball-type ball-type-active" : "ball-type"}
        >
          <button
            onClick={() => {
              setheaderBonus(!headerBonus);
              setVolleyBonus(false);
            }}
          >
            <img src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Match/heading-icon.png" />
          </button>
        </div>
      </section>
    </main>
  );
}
