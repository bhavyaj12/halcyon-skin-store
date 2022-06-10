import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  CartPage,
  LoginPage,
  ProductsPage,
  SignupPage,
  WishlistPage,
  InvalidPage,
  SingleProductPage,
} from "../pages/";
import RequiresAuth from "./RequiresAuth";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<SingleProductPage />} />
      <Route path="*" element={<InvalidPage />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <CartPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <WishlistPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export default SiteRoutes;
