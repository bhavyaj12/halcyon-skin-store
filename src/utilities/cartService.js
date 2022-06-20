import axios from "axios";
import { useToast } from "../custom-hooks";

const { showToast } = useToast();

const fetchCart = async (cartDispatch, token) => {
  try {
    const { data } = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    cartDispatch({ type: "FETCH_CART", payload: data.cart });
  } catch (error) {
    showToast("error", "Can't fetch cart, try again later or reload.");
  }
};

const addToCart = async (product, token, cartDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: token },
      }
    );
    cartDispatch({ type: "ADD_TO_CART", payload: data.cart });
    showToast("success", "Added to cart");
  } catch (error) {
    showToast("error", "Can't add to cart, try again later or reload.");
  }
};

const removeFromCart = async (_id, token, cartDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
    showToast("success", "Removed from cart");
  } catch (error) {
    showToast("error", "Can't remove from cart, try again later or reload.");
  }
};

const updateQuantity = async (type, _id, token, cartDispatch) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: type } },
      {
        headers: { authorization: token },
      }
    );
    cartDispatch({ type: "UPDATE_CART_QUANT", payload: data.cart });
  } catch (error) {
    showToast("error", "Can't update cart, try again later or reload.");
  }
};

const fetchCoupons = async (cartDispatch) => {
  try {
    const { data } = await axios.get("/api/coupon");
    cartDispatch({ type: "FETCH_COUPONS", payload: data.coupons });
  } catch (error) {
    showToast("error", "Can't fetch coupons, try again later or reload.");
  }
};

export { fetchCart, addToCart, removeFromCart, updateQuantity, fetchCoupons };
