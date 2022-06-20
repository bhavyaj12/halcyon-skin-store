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
  AddressPage,
  OrderSummaryPage
} from "../pages/";
import RequiresAuth from "./RequiresAuth";
import Mockman from "mockman-js";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
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
      <Route
        path="/address"
        element={
          <RequiresAuth>
            <AddressPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/order-summary"
        element={
          <RequiresAuth>
            <OrderSummaryPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export default SiteRoutes;
