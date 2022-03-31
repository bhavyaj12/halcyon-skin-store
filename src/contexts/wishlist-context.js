import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducers";

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(WishlistReducer, {
    wishlist: [],
  });

  return (
    <WishlistContext.Provider value={{ wishState, wishDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
