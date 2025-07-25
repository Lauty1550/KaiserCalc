import "./css/Root.css";
import SwitchModeButton from "./components/SwitchModeButton";

import { useDarkMode } from "./hooks/useDarkmode";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <main className="root">
      <Header>
        switchModeButton=
        {
          <SwitchModeButton
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        }
      </Header>
      <Content />
    </main>
  );
}

export default App;
