import React from "react";
import style from "../styles/tile.module.scss";
import { Button } from "@carbon/react";
import { Launch } from "@carbon/icons-react";

const Tile2 = ({ darkMode }) => {
  return (
    <div className={darkMode ? style.tileContainerDark : style.tileContainer}>
      <p className={style.title}>Need help?</p>
      <br />
      <p className={style.description}>
        Submit an IBM Cloud Support Case to our team
      </p>
      <br />
      <div className={style.buttons}>
        <Button
          kind="tertiary"
          className={darkMode ? style.tertialryButtonDark : ""}
          renderIcon={Launch}
          onClick={() =>
            window.open(
              "https://cloud.ibm.com/unifiedsupport/cases/form?type=0700b67447ed7d5038e0861f536d43ad",
              "_blank"
            )
          }
        >
          Support case
        </Button>
      </div>
    </div>
  );
};

export default Tile2;
