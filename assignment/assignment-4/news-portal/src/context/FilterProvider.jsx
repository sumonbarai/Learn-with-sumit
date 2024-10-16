/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({ keyword: "", category: "general" });

  const handleFilter = (key, value) => {
    setFilter({
      keyword: "",
      category: "general",
      [key]: value,
    });
  };

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
