import React from "react";
import styles from "../styles/dashboard.module.scss";
import Tile1 from "./Tile1";
import Tile2 from "./Tile2";

const Dashboard = ({ darkMode }) => {
  return (
    <div className={styles.cards}>
      <Tile1 darkMode={darkMode} />
      <Tile2 darkMode={darkMode} />
    </div>
  );
};

export default Dashboard;
