import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {};

const Button: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  return <button {...buttonProps}>{buttonProps.children}</button>;
};

export default Button;
