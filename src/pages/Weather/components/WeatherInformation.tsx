import React from "react";

import "./WeatherInformation.css";

type WeatherInformationProps = {
  weatherData: WeatherData | null;
};

const WeatherInformation: React.FC<WeatherInformationProps> = ({
  weatherData,
}) => {
  if (weatherData === null) {
    return null;
  }

  return (
    <div className="weather-information">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <span>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt="weather icon"
        />
        <p>{weatherData.weather[0].description}</p>
      </span>
    </div>
  );
};

export default WeatherInformation;
