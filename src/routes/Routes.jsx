import { Routes, Route } from 'react-router-dom';
import Mockman from "mockman-js";
import { LandingPage, CartPage, LoginPage, LogoutPage, ProductsPage, SignupPage, WishlistPage } from '../pages/';

export default function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/mock" element={
                <Mockman>

                </Mockman>
            }
            />
        </Routes>
    );
}