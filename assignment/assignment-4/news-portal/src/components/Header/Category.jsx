import { useFilter } from "../../context/FilterProvider";

const Category = () => {
  const { handleFilter } = useFilter();

  const handleTag = (value) => {
    handleFilter("category", value);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a onClick={() => handleTag("general")} href="#">
            General
          </a>
        </li>
        <li>
          <a
            className="my-active"
            onClick={() => handleTag("business")}
            href="#"
          >
            Business
          </a>
        </li>
        <li>
          <a onClick={() => handleTag("entertainment")} href="#">
            Entertainment
          </a>
        </li>
        <li>
          <a onClick={() => handleTag("health")} href="#">
            Health
          </a>
        </li>
        <li>
          <a onClick={() => handleTag("science")} href="#">
            Science
          </a>
        </li>
        <li>
          <a onClick={() => handleTag("sports")} href="#">
            Sports
          </a>
        </li>
        <li>
          <a onClick={() => handleTag("technology")} href="#">
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
