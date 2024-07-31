import React from "react";

import "./Loading.css";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return <h2 className="loading">Loading...</h2>;
};

export default Loading;
