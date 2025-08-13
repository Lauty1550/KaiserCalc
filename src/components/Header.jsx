import "../css/Header.css";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  return (
    <nav className="navbar">
      <main className="header">
        <h1 className="header-title">Kaiser Calc</h1>

        <LanguageSwitcher />
      </main>
    </nav>
  );
}
