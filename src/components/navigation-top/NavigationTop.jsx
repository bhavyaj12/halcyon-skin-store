import "./navigation-top.css";
import storeLogo from "../../assets/images/HalcyonStoreLogo.png";

export default function NavigationTop() {
  return (
    <header id="header">
      <nav className="store-nav-bar">
        <div className="store-logo-box">
          <a href="./">
            <img src={storeLogo} alt="logo" className="store-logo" />
          </a>
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
              <a href="./" className="button button-primary button-link active">
                Home
              </a>
            </li>
            <li>
              <a
                href="./Product List/product.html"
                className="button button-primary button-link"
              >
                Shop Now
              </a>
            </li>
            <li>
              <a
                href="./Authentication/login.html"
                className="button button-primary button-link"
              >
                <i className="fas fa-user"></i>Account
              </a>
            </li>
            <li>
              <a href="./Wishlist/wishlist.html">
                <div className="badge mx-4 ">
                  <i className="fas fa-heart"></i>
                  <div className="badge-no">0</div>
                </div>
              </a>
            </li>
            <li>
              <a href="./Cart/cart.html">
                <div className="badge mx-4 ">
                  <i className="fas fa-shopping-cart"></i>
                  <div className="badge-no">0</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
