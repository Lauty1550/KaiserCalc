import { useState, useEffect } from "react";

export function useSelectedCharacter() {
  const [character, setCharacter] = useState("");
  const [country, setCountry] = useState("");
  const [nickName, setNickName] = useState("");
  const [id, setId] = useState();

  function defaultCharacter() {
    setCharacter("Karl Heinz Schneider");
    setCountry("Germany");
    setNickName("Charge of the Young Emperor");
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
      setNickName(selectedValues[2].label);
      setId(selectedValues[2].value);
    } else {
      defaultCharacter();
    }
  };

  return { character, country, nickName, handleSelectionChange, id };
}
