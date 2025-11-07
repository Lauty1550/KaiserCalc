import "../css/Header.css";
import { LanguageSwitcher } from "./LanguageSwitcher";
import useDarkMode from "../hooks/useDarkMode.js";
import SwitchModeButton from "./SwitchModeButton.jsx";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className="navbar">
      <main className="header">
        <h1 className="header-title">Kaiser Calc</h1>
        <LanguageSwitcher />
        <SwitchModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </main>
    </nav>
  );
}
