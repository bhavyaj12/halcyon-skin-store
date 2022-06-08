const WishlistReducer = (wishState, { type, payload }) => {
  switch (type) {
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishState,
        wishlist: wishState.wishlist.filter((item) => item._id !== payload),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...wishState,
        wishlist: [...wishState.wishlist, payload],
      };

    default:
      return wishState;
  }
};

export { WishlistReducer };
