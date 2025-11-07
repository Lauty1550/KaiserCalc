import "../css/Content.css";
import "../css/PlayerSelector.css";
import { Player } from "./Player";
import { PlayerSelector } from "./PlayerSelector";
import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { PlayerStats } from "./tables/PlayerStats";
import { PlayerInGameStats } from "./PlayerInGameStats";
import { StatsBonus } from "./StatsBonus";

export default function Content() {
  const { character, country, nickName, handleSelectionChange, label } =
    useSelectedCharacter();

  return (
    <main className="content">
      <PlayerSelector onSelectionChange={handleSelectionChange} />

      <article className="player-info">
        <Player
          character={character}
          country={country}
          nickName={nickName}
          label={label}
        />
        <PlayerStats />

        <section className="bonus-calc">
          <StatsBonus />
          <PlayerInGameStats />
        </section>
      </article>
    </main>
  );
}
