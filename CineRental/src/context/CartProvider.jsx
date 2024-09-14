/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducer/cart/reducer";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
