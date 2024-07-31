import React from "react";
import { Button, SearchField } from "shared";

import "./Inputs.css";

type InputsProps = {
  city: string;
  fetchWeather: (city: string) => Promise<void>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const Inputs: React.FC<InputsProps> = ({ city, fetchWeather, setCity }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onFetchWeather = () => {
    fetchWeather(city);
  };

  return (
    <div className="input-container">
      <SearchField onChange={handleChange} value={city} />
      <Button onClick={onFetchWeather}>Search</Button>
    </div>
  );
};

export default Inputs;
