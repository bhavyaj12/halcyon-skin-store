const CartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "FETCH_CART":
      return {
        ...cartState,
        cart: payload,
      };

    case "RESET_CART":
      return {
        ...cartState,
        cart: [],
      };

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: payload,
      };

    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: payload,
      };

    case "UPDATE_CART_QUANT":
      return {
        ...cartState,
        cart: payload,
      };

    default:
      return cartState;
  }
};

export { CartReducer };
