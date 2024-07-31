import React, { Suspense } from "react";

import { WeatherPage } from "pages";
import { Loading } from "shared";

import "./App.css";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<Loading />}>
        <WeatherPage />
      </Suspense>
    </div>
  );
};

export default App;
