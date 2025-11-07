import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    const path = window.location.pathname.split("/").filter(Boolean);
    path[0] = lng;
    window.history.replaceState({}, "", "/" + path.join("/"));

    window.location.reload();
  };

  return (
    <div>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
