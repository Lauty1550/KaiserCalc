import { usePlayerContext } from "../context/PlayerContext";

export function useLimits() {
  const { limitBreak, evolutionTraining, setLimitBreak, setEvolutionTraining } =
    usePlayerContext();

  function handleLimitBreak() {
    setLimitBreak(!limitBreak);
  }

  function handleEvolutionTraining() {
    if (evolutionTraining < 4) {
      setEvolutionTraining((prev) => prev + 1);
    } else setEvolutionTraining(0);
  }

  return { handleLimitBreak, handleEvolutionTraining };
}
