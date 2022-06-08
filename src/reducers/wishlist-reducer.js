const WishlistReducer = (wishState, { type, payload }) => {
  switch (type) {
    case "FETCH_WISHLIST":
      return {
        ...wishState,
        wishlist: payload,
      };

    case "RESET_WISHLIST":
      return {
        ...wishState,
        wishlist: [],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishState,
        wishlist: payload,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...wishState,
        wishlist: payload,
      };

    default:
      return wishState;
  }
};

export { WishlistReducer };
