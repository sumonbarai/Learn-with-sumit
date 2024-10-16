/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import useWeatherFetch from "../hooks/useWeatherFetch";

const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useWeatherFetch();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
