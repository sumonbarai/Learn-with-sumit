/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (info) => {
    setFavorite([...favorite, info]);
  };
  const removeFavorite = (info) => {
    setFavorite(favorite.filter((fav) => fav.location !== info.location));
  };

  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorite = () => useContext(FavoriteContext);

export { FavoriteProvider, useFavorite };
