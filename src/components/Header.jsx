import React from "react";
import "../css/Header.css";
// import LanguageSwitcher from "./LanguageSelector";

export default function Header({ switchModeButton }) {
  {
    return (
      <nav className="navbar">
        <main className="header">
          <h1 className="header-title">Jugadores </h1>
          <h1 className="header-title">Captain Tsubasa Dream Team </h1>

          {switchModeButton}
          {/* <LanguageSwitcher /> */}
        </main>
      </nav>
    );
  }
}
