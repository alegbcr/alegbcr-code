import React from "react";

// styles
import "../styles/Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.buttonAction}
      className={`button-style-default ${props.classNames}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
