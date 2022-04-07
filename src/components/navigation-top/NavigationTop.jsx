import { Link, useNavigate } from "react-router-dom";
import storeLogo from "../../assets/images/HalcyonStoreLogo.png";
import { useWishlist, useCart, useAuth } from "../../contexts";
import "./navigation-top.css";

export default function NavigationTop() {
  const { auth, setAuth } = useAuth();
  const redirect = useNavigate();

  const { cartState } = useCart();
  const { wishState } = useWishlist();
  const signOutFunc = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
    }));
    redirect("/login");
  };

  return (
    <header id="header">
      <nav className="store-nav-bar">
        <div className="store-logo-box">
          <Link to="/">
            <img src={storeLogo} alt="logo" className="store-logo" />
          </Link>
        </div>
        <div className="store-nav">
          <ul className="store-nav-links ul-no-decor display-flex">
            <li className="search-bar">
              <input type="search" placeholder="Search our skincare store " />
              <label className="search-bar-icon">
                <span className="fas fa-search"></span>
              </label>
            </li>
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
                  <i className="fas fa-user"></i>Account
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
              {auth.isAuth !== true ? (
                <Link to="/login">
                  <div className="badge mx-4 ">
                    <i className="fas fa-heart"></i>
                    <div className="badge-no">{wishState.wishlist.length}</div>
                  </div>
                </Link>
              ) : (
                <Link to="/wishlist">
                  <div className="badge mx-4 ">
                    <i className="fas fa-heart"></i>
                    <div className="badge-no">{wishState.wishlist.length}</div>
                  </div>
                </Link>
              )}
            </li>
            <li>
              {auth.isAuth !== true ? (
                <Link to="/login">
                  <div className="badge mx-4 ">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="badge-no">{cartState.cart.length}</div>
                  </div>
                </Link>
              ) : (
                <Link to="/cart">
                  <div className="badge mx-4 ">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="badge-no">{cartState.cart.length}</div>
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
