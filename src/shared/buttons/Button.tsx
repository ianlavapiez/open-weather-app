import React, { ComponentPropsWithoutRef } from "react";

import "./Button.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {};

const Button: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  return (
    <button className="button" {...buttonProps}>
      {buttonProps.children}
    </button>
  );
};

export default Button;
