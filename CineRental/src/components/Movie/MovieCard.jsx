import tag from "../../assets/tag.svg";
import Rating from "../UI/Rating";
import { disableScrollBar, getImg } from "../../utils/movieUtils";
import MovieModal from "./MovieModal";
import { useState } from "react";
import { useCart } from "../../context/CartProvider";
import { ADD_CART } from "../../reducer/cart/actionType";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";

const MovieCard = ({ movie }) => {
  const { cartState, dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(!showModal);

  // scroll bar hidden or auto
  showModal ? disableScrollBar("hidden") : disableScrollBar("auto");

  const handleCart = (e, movie) => {
    e.stopPropagation();
    const isExits = cartState.carts.find((cart) => cart.id === movie.id);

    if (isExits) {
      return errorNotification("movie already added");
    }
    // success case
    successNotification("added successfully");
    dispatch({ type: ADD_CART, payload: movie });
  };
  return (
    <>
      {showModal && <MovieModal onShow={handleShowModal} movie={movie} />}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
        onClick={handleShowModal}
      >
        <img
          className="w-full object-cover"
          src={getImg(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating num={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            onClick={(e) => handleCart(e, movie)}
          >
            <img src={tag} alt="avatar" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
