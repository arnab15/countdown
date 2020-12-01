import React from "react";
import classes from "./socialicon.module.css";
function SocialIcon({ socialName, size, link }) {
  return (
    <div>
      <a className={classes.socialContainer} href={link}>
        <i className={`fab fa-${socialName} fa-${size}`}></i>
      </a>
    </div>
  );
}

export default SocialIcon;
