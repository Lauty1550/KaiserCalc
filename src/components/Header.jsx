import React from "react";
import "../css/Header.css";
// import LanguageSwitcher from "./LanguageSelector";

export default function Header({ switchModeButton }) {
  {
    return (
      <nav className="navbar">
        <main className="header">
          <h1 className="header-title">Kaiser Calc</h1>

          {switchModeButton}
          {/* <LanguageSwitcher /> */}
        </main>
      </nav>
    );
  }
}
