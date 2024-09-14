import { getAllMovies } from "../../data/movies";
import { getImg } from "../../utils/movieUtils";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  getImg();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.length <= 0
          ? "No Movie Found"
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
