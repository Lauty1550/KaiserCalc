export const COUNTRY_MAP = {
  7: "Germany",
  2: "Italy",
  3: "Argentina",
  4: "England",
  5: "Uruguay",
  6: "France",
  1: "Japan",
  8: "Portugal",
  10: "Spain",
  15: "Thailand",
  16: "Saudi Arabia",
  17: "China",
  18: "South Korea",
  19: "Uzbekistan",
  25: "Mexico",
  26: "Sweden",
  27: "Netherlands",
  28: "Brazil",
  29: "Colombia",
  30: "Usa",
  33: "Denmark",
  34: "Nigeria",
  42: "Norway",
  44: "Croatia",
  45: "United Kingdom",
  46: "Scotland",
  47: "Gabon",
  48: "Jamaica",
  49: "Serbia",
  0: "Error",
};

export const CATEGORIES = {
  Attack: ["Dribble", "Shot", "Pass"],
  Defence: ["Tackle", "Block", "Intercept"],
  Saving: ["Catch", "Punch"],
  Physical: ["Speed", "Power", "Technique"],
};

export const levelMap = {
  1: 60,
  2: 118,
  3: 174,
  4: 228,
  5: 281,
  6: 332,
  7: 381,
  8: 429,
  9: 475,
  10: 519,
  11: 562,
  12: 603,
  13: 644,
  14: 683,
  15: 720,
  16: 756,
  17: 790,
  18: 822,
  19: 853,
  20: 882,
  21: 909,
  22: 935,
  23: 959,
  24: 981,
  25: 1000,
};

export const EVOLUTION_TRAINING_PLAYER = {
  1: { Stamina: 100 },
  2: { Technique: 1200, Power: 1200, Speed: 1200 },
  3: { Technique: 1200, Power: 1200, Speed: 1200 },
  4: {
    Dribble: 1200,
    Shot: 1200,
    Pass: 1200,
    Tackle: 1200,
    Block: 1200,
    Intercept: 1200,
  },
};

export const EVOLUTION_TRAINING_GK = {
  1: { Stamina: 100 },
  2: { Technique: 1200, Power: 1200, Speed: 1200 },
  3: { Technique: 1200, Power: 1200, Speed: 1200 },
  4: { Punch: 1200, Catch: 1200 },
};

export const BALL_CONDITION_MULTIPLIERS = {
  Normal: 0,
  Good: 12.5,
  "V.Good": 25,
};
