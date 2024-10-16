import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "./context/WeatherProvider.jsx";
import { LocationProvider } from "./context/LocationProvider.jsx";
import { FavoriteProvider } from "./context/FavoriteProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  </StrictMode>
);
