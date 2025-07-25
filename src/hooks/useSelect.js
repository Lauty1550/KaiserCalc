import { useState } from "react";
import { usePlayer } from "./usePlayer";

export function useSelect() {
  const { getCharacterOptions, getCountryOptions } = usePlayer();

  const STEPS = [
    {
      name: "Pais",
      getOptions: () => getCountryOptions(),
    },
    {
      name: "Personaje",
      getOptions: (selectedCountry) =>
        selectedCountry ? getCharacterOptions(selectedCountry.value) : [],
    },
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState(Array(STEPS.length).fill(null));

  const currentStep = STEPS[stepIndex];

  const previousSelections = selections.slice(0, stepIndex);

  let options = currentStep.getOptions(...previousSelections);

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

  return {
    stepIndex,
    currentStep,
    selected: selections,
    options,
    onSelect: handleSelect,
    goBack,
  };
}
