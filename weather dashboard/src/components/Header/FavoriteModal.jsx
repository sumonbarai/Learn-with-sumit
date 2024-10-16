import { useFavorite } from "../../context/FavoriteProvider";
import { useLocation } from "../../context/LocationProvider";

const FavoriteModal = () => {
  const { favorite } = useFavorite();
  const { setLocation } = useLocation();

  function handleLocation(info) {
    setLocation(info);
  }
  console.log(favorite);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorite.length > 0 ? (
          favorite.map((fa) => (
            <li
              onClick={() => handleLocation(fa)}
              key={fa.location}
              className="hover:bg-gray-200 "
            >
              {fa.location}
            </li>
          ))
        ) : (
          <p>No Location Saved</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteModal;
