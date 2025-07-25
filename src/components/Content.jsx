import "../css/Content.css";
import { Player } from "./Player";
import { PlayerSelector } from "./PlayerSelector";

export default function Content() {
  return (
    <main className="content">
      <PlayerSelector />
      <Player
        character={"Karl Heinz Schneider"}
        country={"Germany"}
        nickName={"Charge of the Young Emperor"}
      />
    </main>
  );
}
