import { useState, useEffect } from "react";
import { usePlayerContext } from "../context/PlayerContext";
import { useTranslation } from "react-i18next";

export function useSelectedCharacter() {
  const [character, setCharacter] = useState("");
  const [country, setCountry] = useState("");
  const [nickName, setNickName] = useState("");
  const [label, setLabel] = useState("");
  const { setId } = usePlayerContext();
  const { t } = useTranslation("translation");

  function defaultCharacter() {
    setCharacter(t("character"));
    setCountry("Germany");
    setNickName("Charge of the Young Emperor");
    setLabel(t("label"));
    setId(20700353);
  }

  useEffect(() => {
    defaultCharacter();
  }, []);

  const handleSelectionChange = (selectedValues) => {
    if (
      selectedValues[0] &&
      selectedValues[1] &&
      selectedValues[2] &&
      selectedValues[2].value !== "__go_back__"
    ) {
      setCountry(selectedValues[0].label);
      setCharacter(selectedValues[1].label);
      setNickName(selectedValues[2].nickName);
      setLabel(selectedValues[2].label);
      setId(selectedValues[2].value);
    } else {
      defaultCharacter();
    }
  };

  return { character, country, nickName, handleSelectionChange, label };
}
