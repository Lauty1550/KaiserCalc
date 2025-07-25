export default function SwitchModeButton({ darkMode, toggleDarkMode }) {
  return (
    <>
      <button className="switch-theme-color" onClick={toggleDarkMode}>
        {darkMode ? <SunIcon color="white" /> : <MoonIcon color="black" />}
      </button>
    </>
  );
}
