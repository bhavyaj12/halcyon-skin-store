import { createContext, useContext, useReducer, useEffect } from "react";
import { CartReducer } from "../reducers";
import { fetchCart, fetchCoupons } from "../utilities";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cart: [],
    coupons: [],
    selectedCoupon: null,
  });
  const {
    auth: { isAuth, token },
  } = useAuth();

  useEffect(() => {
    if (isAuth) {
      fetchCart(cartDispatch, token);
      fetchCoupons(cartDispatch);
    }
  }, [token]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
