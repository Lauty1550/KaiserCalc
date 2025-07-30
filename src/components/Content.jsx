import "../css/Content.css";
import "../css/PlayerSelector.css";
import { Player } from "./Player";
import { PlayerSelector } from "./PlayerSelector";
import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { PlayerStats } from "./PlayerStats";
import { PlayerInGameStats } from "./PlayerInGameStats";

export default function Content() {
  const { character, country, nickName, handleSelectionChange, id } =
    useSelectedCharacter();

  return (
    <main className="content">
      <PlayerSelector onSelectionChange={handleSelectionChange} />

      <article className="player-info">
        <Player character={character} country={country} nickName={nickName} />
        <PlayerStats id={id} />
        <PlayerInGameStats id={id} />
      </article>
    </main>
  );
}
