import {
  levelMap,
  EVOLUTION_TRAINING_GK,
  EVOLUTION_TRAINING_PLAYER,
} from "./constants";

export function getBonusForLevel(level) {
  return levelMap[level] || 0;
}

export function getEvolutionTrainingBonus(level, isGK) {
  if (level === 0) return {};

  const map = isGK ? EVOLUTION_TRAINING_GK : EVOLUTION_TRAINING_PLAYER;
  const bonus = {};

  for (let lvl = 1; lvl <= level; lvl++) {
    const additions = map[lvl];
    if (!additions) continue;

    for (const [stat, val] of Object.entries(additions)) {
      bonus[stat] = (bonus[stat] || 0) + (val ?? 0);
    }
  }

  return bonus;
}
