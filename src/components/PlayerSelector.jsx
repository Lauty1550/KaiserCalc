import "../css/PlayerSelector.css";
import Select from "react-select";
import { useSelect } from "../hooks/useSelect";

export function PlayerSelector() {
  const { options, selected, onSelect, stepIndex, currentStep } = useSelect();

  return (
    <main>
      <h2>Seleccionar {currentStep.name}</h2>
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        options={options}
        value={selected[stepIndex]}
        onChange={onSelect}
        placeholder={`Selecciona ${currentStep.name}`}
        menuShouldBlockScroll={true}
        closeMenuOnSelect={false}
        isClearable
      />
    </main>
  );
}
