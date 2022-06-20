import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  fetchCoupons,
  clearCart,
} from "./cartService";

import {
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
} from "./wishlistService";

import { fetchSingleProduct, fetchCategories } from "./productService";

import {
  fetchAddress,
  addAddress,
  editAddress,
  removeAddress,
} from "./addressService";

import { getCartData } from "./getCartData";

export {
  fetchCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
  fetchSingleProduct,
  fetchCategories,
  fetchAddress,
  addAddress,
  editAddress,
  removeAddress,
  fetchCoupons,
  getCartData,
  clearCart,
};
