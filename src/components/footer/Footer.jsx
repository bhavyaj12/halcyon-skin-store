import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-columns">
        <span className="col">
          <h3 className="col-title">Contact</h3>
          <nav className="col-list">
            <ul>
              <li>
                <p>hello@halcyonskinstore.com</p>
              </li>
              <li>
                <p>Call Us - 1800 367 5644</p>
              </li>
              <li>Weekdays 09:00 - 17:00</li>
              <li>Weekends 11:00 - 16:00</li>
            </ul>
          </nav>
        </span>
        <span className="col">
          <h3 className="col-title">Explore</h3>
          <nav className="col-list">
            <ul>
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </nav>
        </span>
        <span className="col">
          <h3 className="col-title">Info</h3>
          <nav className="col-list">
            <ul>
              <li>
                <p>Built in India</p>
              </li>
              <li>
                <p>Sustainable</p>
              </li>
              <li>
                <p>15-Day Return Policy</p>
              </li>
              <li>
                <p>We Value Privacy</p>
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
};

export default Footer;
