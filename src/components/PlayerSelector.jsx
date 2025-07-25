import { usePlayer } from "../hooks/usePlayer";

export function PlayerSelector() {
  const { groupByCountry, groupByCharacter } = usePlayer();

  return <main></main>;
}
