import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  CartPage,
  LoginPage,
  ProductsPage,
  SignupPage,
  WishlistPage,
} from "../pages/";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
}

export default SiteRoutes;
