import { useCallback, useState } from "react";

const useWeather = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_APP_KEY;

  const fetchWeather = useCallback(
    async (city: string) => {
      if (WEATHER_API_KEY) {
        setLoading(true);
        setWeatherData(null);

        try {
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
          );

          if (!response.ok) {
            setError("Error fetching weather data.");
          }

          const data: WeatherData = await response.json();

          if (data.cod === "404") {
            setError(data.message);
          } else {
            setWeatherData(data);
            setError(null);
          }
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Something went wrong, please try again.");
          }
        } finally {
          setLoading(false);
        }
      } else {
        /**
         * I included for the purpose of development review from your team. Usually, I would opt to use a generic error message
         * and not to show sensitive information to users.
         */
        setError("API Key is missing.");
      }
    },
    [WEATHER_API_KEY]
  );

  return {
    error,
    fetchWeather,
    loading,
    weatherData,
  };
};

export default useWeather;
