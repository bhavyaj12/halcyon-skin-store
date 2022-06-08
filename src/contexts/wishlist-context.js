import { createContext, useContext, useReducer, useEffect } from "react";
import { WishlistReducer } from "../reducers";
import { fetchWishlist } from "../utilities";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(WishlistReducer, {
    wishlist: [],
  });
  const {
    auth: { isAuth, token },
  } = useAuth();

  useEffect(() => {
    if(isAuth) {
      fetchWishlist(wishDispatch, token)
    }
  }, [token]);

  return (
    <WishlistContext.Provider value={{ wishState, wishDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
