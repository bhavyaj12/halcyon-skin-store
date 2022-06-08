import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../reducers";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, {
    sortBy: "",
    products: [],
    categories: {
      Sunscreen: false,
      Serums: false,
      Moisturizers: false,
      Cleanser: false,
      Bodycare: false,
    },
    price: 2000,
    rating: 0,
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
