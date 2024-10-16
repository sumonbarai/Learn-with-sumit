import { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { filter } = useFilter();

  let url;

  if (filter.keyword) {
    url = import.meta.env.VITE_BASE_URL + `/search?q=${filter.keyword}`;
  } else {
    url =
      import.meta.env.VITE_BASE_URL +
      `/top-headlines?category=${filter.category}`;
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();

        setError(null);

        setData(result.articles || result.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
