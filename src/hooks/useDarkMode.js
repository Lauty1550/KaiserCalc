import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkmode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true; // Modo oscuro por defecto
  });

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkmode((prev) => !prev);
  }

  return { toggleDarkMode, darkMode };
}
