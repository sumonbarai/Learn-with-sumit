import { useFavorite } from "../../context/FavoriteProvider";
import { useWeather } from "../../context/WeatherProvider";

const AddToFavorite = () => {
  const { favorite, addFavorite, removeFavorite } = useFavorite();
  const { weatherData } = useWeather();

  const isFavorite = favorite.find(
    (fav) => fav.location === weatherData.location
  );

  const handleAddFavorite = () => {
    addFavorite({
      location: weatherData.location,
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    });
  };
  const handleRemoveFavorite = () => {
    removeFavorite({
      location: weatherData.location,
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    });
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        {isFavorite ? (
          <button
            onClick={handleRemoveFavorite}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#8f31314d]"
          >
            <span>Remove to Favourite</span>
          </button>
        ) : (
          <button
            onClick={handleAddFavorite}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToFavorite;
