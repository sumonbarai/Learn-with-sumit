/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LocationContext = createContext(null);

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext(LocationContext);

export { LocationProvider, useLocation };
