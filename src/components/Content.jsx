import "../css/Content.css";
import { Player } from "./Player";
import { PlayerSelector } from "./PlayerSelector";
import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { PlayerStats } from "./PlayerStats";

export default function Content() {
  const { character, country, nickName, handleSelectionChange, id } =
    useSelectedCharacter();

  return (
    <main className="content">
      <PlayerSelector onSelectionChange={handleSelectionChange} />
      <Player character={character} country={country} nickName={nickName} />
      <PlayerStats id={id} />
    </main>
  );
}
