import { usePlayerContext } from "../context/PlayerContext";

export function usePlayerTable() {
  const { player, setViewMode } = usePlayerContext();

  function showHiddenAbility() {
    if (player?.hidden_abilities && player.hidden_abilities.length > 0) {
      setViewMode("hidden");
    }
  }

  function showSkills() {
    setViewMode("skills");
  }

  function showStats() {
    setViewMode("stats");
  }

  return { showHiddenAbility, showSkills, showStats };
}
