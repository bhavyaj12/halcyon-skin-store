import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-columns">
        <span className="col">
          <h3 className="col-title">Contact</h3>
          <nav className="col-list">
            <ul>
              <li>
                <a href="./">hello@halcyonskinstore.com</a>
              </li>
              <li>
                <a href="./">Chat with Us</a>
              </li>
              <li>
                <a href="./">Call Us</a>
              </li>
              <li>Weekdays 09:00 - 17:00 Weekends 11:00 - 16:00</li>
            </ul>
          </nav>
        </span>
        <span className="col">
          <h3 className="col-title">Explore</h3>
          <nav className="col-list">
            <ul>
              <li>
                <a href="./Product List/product.html">All Products</a>
              </li>
              <li>
                <a href="./Cart/cart.html">Cart</a>
              </li>
              <li>
                <a href="./Wishlist/wishlist.html">Wishlist</a>
              </li>
            </ul>
          </nav>
        </span>
        <span className="col">
          <h3 className="col-title">Info</h3>
          <nav className="col-list">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </nav>
        </span>
        <span className="col">
          <div className="subscribe-form-holder"></div>
          <div className="social-media">
            <h3 className="social-col-title">Follow</h3>
            <ul className="social-media-list">
              <li>
                <a href="https://github.com/bhavyaj12" target="_blank">
                  <i className="fab fa-github "></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bhavzlearn" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bhavya-joshi-438178184"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media payment-logos">
            <h3 className="social-col-title">We Support</h3>
            <ul className="social-media-list">
              <li>
                <i className="fab fa-cc-visa "></i>
              </li>
              <li>
                <i className="fab fa-cc-mastercard"></i>
              </li>
              <li>
                <i className="fab fa-amazon-pay"></i>
              </li>
              <li>
                <i className="fab fa-google-pay"></i>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div className="owner">
        <span>Made with 💜 by Bhavya Joshi</span>
      </div>
      <div className="copyright mt-3">
        &copy; All Rights Reserved 2022 Halcyon-Designs
      </div>
    </footer>
  );
}
