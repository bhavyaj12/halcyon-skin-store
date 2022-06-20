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

    case "FETCH_COUPONS":
      return {
        ...cartState,
        coupons: payload,
      };

    case "SET_SELECTED_COUPON":
      const couponData = cartState.coupons.find(
        (coupon) => coupon._id === payload
      );
      return {
        ...cartState,
        selectedCoupon: couponData,
      };

    case "CLEAR_SELECTED_COUPON":
      return {
        ...cartState,
        selectedCoupon: null,
      };

    case "CLEAR_CART":
      return {
        ...cartState,
        cart: payload,
      };

    default:
      return cartState;
  }
};

export { CartReducer };
