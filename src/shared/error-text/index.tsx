import React, { PropsWithChildren } from "react";

import "./ErrorText.css";

type ErrorTextProps = {};

const ErrorText: React.FC<PropsWithChildren<ErrorTextProps>> = ({
  children,
}) => {
  return <h2 className="error-text">{children}</h2>;
};

export default ErrorText;
