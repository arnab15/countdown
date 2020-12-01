import React from "react";
import classes from "./button.module.css";
function Button({ name }) {
  return <div className="btn btn-primary">{name}</div>;
}

export default Button;
