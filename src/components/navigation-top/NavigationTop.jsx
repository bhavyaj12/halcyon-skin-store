import "./navigation-top.css";
import storeLogo from "../../assets/images/HalcyonStoreLogo.png";

export default function NavigationTop() {
  return (
    <header id="header">
      <nav class="store-nav-bar">
        <div class="store-logo-box">
          <a href="./">
            <img src={storeLogo} alt="logo" class="store-logo" />
          </a>
        </div>
        <div class="store-nav">
          <ul class="store-nav-links ul-no-decor display-flex">
            <li class="search-bar">
              <input type="search" placeholder="Search our skincare store " />
              <label class="search-bar-icon">
                <span class="fas fa-search"></span>
              </label>
            </li>
            <li>
              <a href="./" class="button button-primary button-link active">
                Home
              </a>
            </li>
            <li>
              <a
                href="./Product List/product.html"
                class="button button-primary button-link"
              >
                Shop Now
              </a>
            </li>
            <li>
              <a
                href="./Authentication/login.html"
                class="button button-primary button-link"
              >
                <i class="fas fa-user"></i>Account
              </a>
            </li>
            <li>
              <a href="./Wishlist/wishlist.html">
                <div class="badge mx-4 ">
                  <i class="fas fa-heart"></i>
                  <div class="badge-no">0</div>
                </div>
              </a>
            </li>
            <li>
              <a href="./Cart/cart.html">
                <div class="badge mx-4 ">
                  <i class="fas fa-shopping-cart"></i>
                  <div class="badge-no">0</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
