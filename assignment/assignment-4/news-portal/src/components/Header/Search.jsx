import { useEffect, useRef, useState } from "react";
import { useFilter } from "../../context/FilterProvider";

const Search = ({ onshow }) => {
  const { handleFilter } = useFilter();
  const inputRef = useRef();
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
    handleFilter("keyword", e.target.value);
  };

  const handleblur = () => {
    handleFilter("keyword", "");
    onshow();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      style={{ padding: "5px" }}
      ref={inputRef}
      type="search"
      onChange={handleChange}
      onBlur={handleblur}
      value={data}
    />
  );
};

export default Search;
