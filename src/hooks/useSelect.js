import { useState } from "react";
import { usePlayer } from "./usePlayer";

export function useSelect() {
  const { getCharacterOptions, getCountryOptions, getVariantOptions } =
    usePlayer();

  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState([null, null, null]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const STEPS = [
    {
      name: "Pais",
      getOptions: () => getCountryOptions(),
    },
    {
      name: "Personaje",
      getOptions: () => {
        const pais = selections[0];
        return pais ? getCharacterOptions(pais.value) : [];
      },
    },
    {
      name: "Variante",
      getOptions: () => {
        const personaje = selections;
        return personaje ? getVariantOptions(personaje) : [];
      },
    },
  ];

  const currentStep = STEPS[stepIndex];

  let options = currentStep.getOptions();

  if (!Array.isArray(options)) {
    options = [];
  }

  if (stepIndex > 0) {
    options = [
      { value: "__go_back__", label: "⬅️ Volver al paso anterior" },
      ...options,
    ];
  }

  function handleSelect(option) {
    if (!option) {
      const updated = [...selections];
      updated[stepIndex] = null;
      setSelections(updated);
      return;
    }

    if (option.value === "__go_back__") {
      goBack();
      return;
    }

    const updated = [...selections];
    updated[stepIndex] = option;
    setSelections(updated);

    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      menuClose();
    }
  }

  function goBack() {
    if (stepIndex > 0) {
      const newStepIndex = stepIndex - 1;
      const updatedSelections = [...selections];
      updatedSelections[newStepIndex] = null;
      updatedSelections[newStepIndex + 1] = null;
      setSelections(updatedSelections);
      setStepIndex(newStepIndex);
    }
  }

  function menuOpen() {
    setIsMenuOpen(true);
  }

  function menuClose() {
    setIsMenuOpen(false);
  }

  return {
    stepIndex,
    currentStep,
    selected: selections,
    options,
    onSelect: handleSelect,
    isMenuOpen,
    menuOpen,
    menuClose,
  };
}
