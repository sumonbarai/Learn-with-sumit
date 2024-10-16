/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const { data, isLoading, error } = useFetchData();

  return (
    <NewsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNews = () => useContext(NewsContext);
export { NewsProvider, useNews };
