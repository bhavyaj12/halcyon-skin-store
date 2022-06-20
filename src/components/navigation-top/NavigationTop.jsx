import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SearchBar } from "../../components";
import storeLogo from "../../assets/images/HalcyonStoreLogo.png";
import { useWishlist, useCart, useAuth } from "../../contexts";
import "./navigation-top.css";

const NavigationTop = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowHamburger(false);
  }, [location.pathname]);

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { wishState, wishDispatch } = useWishlist();

  const signOutFunc = (setAuth) => {
    localStorage.removeItem("HALCYON_AUTH_TOKEN");
    localStorage.removeItem("halcyon_username");
    localStorage.removeItem("halcyon_user_obj");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
      userObj: {},
    }));
    cartDispatch({ type: "RESET_CART" });
    wishDispatch({ type: "RESET_WISHLIST" });
    navigate("/login");
  };

  return (
    <header id="header">
      <nav className="store-nav-bar">
        <button
          className={
            showHamburger
              ? "close-hamburger-btn close-ham-active"
              : "close-hamburger-btn"
          }
          onClick={() => setShowHamburger(!showHamburger)}
        >
          <span>
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="store-logo-box">
          <Link to="/">
            <img src={storeLogo} alt="logo" className="store-logo" />
          </Link>
        </div>
        <div
          className={
            showHamburger
              ? "store-nav hamburger-nav nav-active"
              : "store-nav hamburger-nav"
          }
        >
          <ul className="store-nav-links ul-no-decor display-flex">
            <SearchBar />
            <li>
              <Link to="/" className="button button-primary button-link active">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="button button-primary button-link"
              >
                Shop Now
              </Link>
            </li>
            <li>
              {auth.isAuth !== true ? (
                <Link to="/login" className="button button-primary button-link">
                  <i className="fas fa-user"></i>Login
                </Link>
              ) : (
                <button
                  className="button button-primary btn-solid logout-btn"
                  onClick={() => signOutFunc(setAuth)}
                >
                  Logout
                </button>
              )}
            </li>
            <li>
              <Link to="/cart">
                <div className="badge mx-4 ">
                  <i className="fas fa-shopping-cart"></i>
                  <div className="badge-no">{cartState.cart.length}</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <div className="badge mx-4 ">
                  <i className="fas fa-heart"></i>
                  <div className="badge-no">{wishState.wishlist.length}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setShowHamburger(!showHamburger)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavigationTop;
