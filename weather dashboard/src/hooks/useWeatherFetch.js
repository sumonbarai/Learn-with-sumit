import { useEffect, useState } from "react";
import { useLocation } from "../context/LocationProvider";
import { toast } from "react-toastify";
const initialState = {
  location: "",
  climate: "",
  temperature: "",
  maxTemperature: "",
  minTemperature: "",
  humidity: "",
  cloudPercentage: "",
  wind: "",
  time: "",
  longitude: "",
  latitude: "",
};
const useWeatherFetch = () => {
  const [weatherData, setWeatherData] = useState(initialState);
  const [loading, setLoading] = useState({
    status: false,
    msg: "",
  });
  const [error, setError] = useState(null);
  const { location } = useLocation();

  const fetchData = async (latitude, longitude) => {
    try {
      setLoading({
        status: true,
        msg: "weather data fetching...",
      });
      setError(null);

      if (location?.location === "") {
        return toast.error("Location not found");
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      // error handle
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setWeatherData({
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      });
    } catch (error) {
      setWeatherData(initialState);
      setError(error);
    } finally {
      setLoading({
        status: false,
        msg: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      status: true,
      msg: "Fetching location...",
    });

    if (location) {
      fetchData(location.latitude, location.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [location]);

  return { weatherData, loading, error };
};

export default useWeatherFetch;
