const CartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter((item) => item._id !== payload),
      };

    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, { ...payload, quantity: 1 }],
      };

    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item._id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item._id === payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      };

    default:
      return cartState;
  }
};

export { CartReducer };
