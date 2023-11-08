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
        In order to set up your instance,{" "}
        <Link
          className={darkMode ? style.linkDark : ""}
          href="https://cloud.ibm.com/unifiedsupport/cases/form?type=085127ea971eb11400d2bbdfe153afad"
        >
          create a Support Case
        </Link>{" "}
        under the Topic &quot;IBM Cloud SIEM for ISVs - Instance
        Management&quot; and Subtopic &quot;New Instance Onboarding
        Request&quot; and provide your IP address of jump server, Plan Name
        (Small/Medium/Large), and Email Address of users who need access (comma
        separated). Access may take up to two business days.
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
            window.open(
              "https://ibmcld-pari-eu-qcon1.cloudsiem.ibm.com/",
              "_blank"
            )
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
