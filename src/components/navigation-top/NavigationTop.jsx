import { Link } from "react-router-dom";
import storeLogo from "../../assets/images/HalcyonStoreLogo.png";
import { useWishlist, useCart } from "../../contexts";
import "./navigation-top.css";


export default function NavigationTop() {
  const { cartState } = useCart();
  const { wishState } = useWishlist();
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
              <Link to="/products" className="button button-primary button-link">
                Shop Now
              </Link>
            </li>
            <li>
              <Link to="/login" className="button button-primary button-link">
                  <i className="fas fa-user"></i>Account
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
            <li>
              <Link to="/cart">
                <div className="badge mx-4 ">
                  <i className="fas fa-shopping-cart"></i>
                  <div className="badge-no">{cartState.cart.length}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
