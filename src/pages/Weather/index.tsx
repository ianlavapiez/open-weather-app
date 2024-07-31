import React, { useState } from "react";

import useWeather from "hooks/useWeather";
import { ErrorText, Loading } from "shared";

import { Inputs, WeatherInformation } from "./components";
import "./Weather.css";

type WeatherProps = {};

const Weather: React.FC<WeatherProps> = () => {
  const [city, setCity] = useState<string>("");
  const { error, loading, fetchWeather, weatherData } = useWeather();

  return (
    <div className="weather-container">
      <h1>Open Weather App - Exercise</h1>
      <Inputs city={city} fetchWeather={fetchWeather} setCity={setCity} />
      {error && <ErrorText>{error}</ErrorText>}
      {loading && <Loading />}
      <WeatherInformation weatherData={weatherData} />
    </div>
  );
};

export default Weather;
