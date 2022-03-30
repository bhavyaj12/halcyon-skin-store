const ProductReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        sortBy: "",
        categories: {
          Sunscreen: false,
          Serums: false,
          Moisturizers: false,
          Cleanser: false,
          Bodycare: false,
        },
        price: 2000,
        rating: 0,
      };

    case "INIT_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };

    case "SUNSCREEN":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Sunscreen: !state.categories.Sunscreen,
        },
      };

    case "SERUMS":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Serums: !state.categories.Serums,
        },
      };

    case "MOISTURIZERS":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Moisturizers: !state.categories.Moisturizers,
        },
      };

    case "CLEANSER":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Cleanser: !state.categories.Cleanser,
        },
      };

    case "BODYCARE":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Bodycare: !state.categories.Bodycare,
        },
      };

    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };

    case "PRICE_LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    case "RATING_HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    default:
      return { ...state };
  }
};

export { ProductReducer };
