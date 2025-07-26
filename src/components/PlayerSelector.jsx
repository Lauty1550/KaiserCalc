import "../css/PlayerSelector.css";
import Select from "react-select";
import { useSelect } from "../hooks/useSelect";
import { FormatedOptions } from "./FormatedOptions";

export function PlayerSelector() {
  const {
    options,
    selected,
    onSelect,
    stepIndex,
    currentStep,
    isMenuOpen,
    menuClose,
    menuOpen,
  } = useSelect();

  return (
    <main className="player-selector">
      <h2>Seleccionar {currentStep.name}</h2>
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        options={options}
        formatOptionLabel={(options) => <FormatedOptions data={options} />}
        value={selected[stepIndex]}
        onChange={onSelect}
        placeholder={`Selecciona ${currentStep.name}`}
        menuShouldBlockScroll={true}
        closeMenuOnSelect={false}
        menuIsOpen={isMenuOpen}
        onMenuOpen={menuOpen}
        onMenuClose={menuClose}
        isClearable
      />
    </main>
  );
}
