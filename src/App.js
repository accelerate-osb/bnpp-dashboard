import Dashboard from "./components/Dashboard";
import styles from "./app.module.scss";
import { useEffect, useState } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    try {
      const config = JSON.parse(queryParams.get("ace_config"));
      setDarkMode(config.darkMode);
    } catch {
      setDarkMode(false);
    }
  }, [darkMode]);

  return (
    <div>
      <div
        className={darkMode ? styles.mainContainerDark : styles.mainContainer}
      >
        <Dashboard darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
