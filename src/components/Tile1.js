import React from "react";
import style from "../styles/tile.module.scss";
import { Button } from "@carbon/react";
import { Launch } from "@carbon/icons-react";
import { Link } from "@carbon/react";

const Tile1 = ({ darkMode }) => {
  return (
    <div className={darkMode ? style.tileContainerDark : style.tileContainer}>
      <p className={style.title}>Getting Started</p>
      <br />
      <p className={style.description}>
        Thank you for subscribing to IBM Cloud SIEM!
        <br />
        <br />
        The IBM Cloud team is setting up your instance and providing access to
        your user administrator.
        <br />
        Access make take up to two business days.
        <br />
        <br />
        If you need to reach out to the IBM Cloud SIEM team sooner, you can
        email the
        <Link
          className={darkMode ? style.linkDark : ""}
          href="mailto: SaaS-CoE-Balakrishnan-WW-DG@ibm.com"
        >
          IBM Cloud SaaS Center of Excellence.
        </Link>
        <br />
        <br />
        Once your instance is setup and access is granted, you can reach the IBM
        Cloud SIEM UI dashboard using the button below.
      </p>
      <div className={style.buttons}>
        <Button
          className={darkMode ? style.primaryButtonDark : style.button}
          renderIcon={Launch}
          onClick={() =>
            window.open("https://console-00885.qradar.ibmcloud.com", "_blank")
          }
        >
          Go to IBM Cloud SIEM Dashboard
        </Button>
        <Button
          className={darkMode ? style.primaryButtonDark : style.button}
          renderIcon={Launch}
          onClick={() =>
            window.open(
              "https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.5/com.ibm.qradar.doc/c_qradar_gs_using_siem.html",
              "_blank"
            )
          }
        >
          Documentation
        </Button>
      </div>
    </div>
  );
};

export default Tile1;
