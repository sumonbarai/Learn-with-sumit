import { ADD_CART, REMOVE_CART } from "./actionType";
export const initialState = {
  carts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    }

    case REMOVE_CART: {
      const remaining = state.carts.filter(
        (cart) => cart.id !== action.payload.id
      );
      return {
        ...state,
        carts: remaining,
      };
    }

    default:
      return state;
  }
};

export default reducer;
