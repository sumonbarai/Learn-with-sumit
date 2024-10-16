import { useState } from "react";
import search from "../../assets/search.svg";
import { getFakeLocationByName } from "../../data/fake-location-data";
import { useLocation } from "../../context/LocationProvider";
const Search = () => {
  const [value, setValue] = useState("");
  const { setLocation } = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    const locationInfo = getFakeLocationByName(value);
    setLocation(locationInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <img src={search} />
        </button>
      </div>
    </form>
  );
};

export default Search;
