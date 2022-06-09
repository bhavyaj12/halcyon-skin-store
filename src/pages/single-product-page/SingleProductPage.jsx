import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useWishlist, useCart } from "../../contexts";
import { addToCart, addToWishlist, removeFromWishlist } from "../../utilities";
import { fetchSingleProduct } from "../../utilities";
import { useToast } from "../../custom-hooks";
import "./single-product-page.css";

const SingleProductPage = () => {
  const { showToast } = useToast();
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const { wishState, wishDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const {
    auth: { isAuth, token },
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { product },
        } = await fetchSingleProduct(productId);
        setSingleProduct(product);
      } catch (error) {
        showToast("error", "Can't fetch product, please try again later.");
      }
    })();
  }, []);

  return !singleProduct ? (
    <main className="single-prod-container p-6">
      <div className="alert alert-container alert-primary">Loading...</div>
    </main>
  ) : (
    <main className="p-6">
      <div className="container-center mb-2">
        <h2 className="h2">Buy Now</h2>
      </div>
      <div className="single-prod-container">
        <div className="grid-col-2 single-product">
          <div className="grid-col-item product-img p-3">
            <img
              src={singleProduct.coverImg}
              alt="product image"
              className="img-responsive"
            />
          </div>
          <div className="grid-col-item single-product-details">
            <div className="p-2 flex-col single-product-text">
              <h1 className="h1">{singleProduct.name}</h1>
              <h2 className="h2">{singleProduct.brand}</h2>
              <span className="rating my-2">
                {singleProduct.rating} <i className="fas fa-star"></i>
                <span className="text-small">
                  {" "}
                  | ({singleProduct.reviews} reviews)
                </span>
              </span>
              <div className="flex single-product-price my-2">
                <h5 className="h5 txt-bold">₹ {singleProduct.discountPrice}</h5>
                {singleProduct.discountRate !== 0 && (
                  <h5 className="h5">
                    <strike>₹ {singleProduct.originalPrice}</strike>
                  </h5>
                )}
                {singleProduct.discountRate !== 0 && (
                  <h5 className="h5 discount txt-bold">
                    ( {singleProduct.discountRate}% OFF )
                  </h5>
                )}
              </div>
              {cartState.cart.find((item) => item._id === singleProduct._id) ? (
                <button
                  className="button button-primary button-text-icon"
                  onClick={() => navigate("/cart")}
                >
                  <span>Go to Cart</span>
                </button>
              ) : singleProduct.inStock ? (
                <button
                  className="button button-primary button-text-icon"
                  onClick={() =>
                    isAuth
                      ? addToCart(singleProduct, token, cartDispatch)
                      : navigate(
                          "/login",
                          { state: { from: location } },
                          { replace: true }
                        )
                  }
                >
                  <span>
                    <i className="fas fa-shopping-cart"></i>
                    Add to Cart
                  </span>
                </button>
              ) : (
                <button className="button button-primary btn-solid button-disabled">
                  <span>Out of Stock</span>
                </button>
              )}

              {wishState.wishlist.length !== 0 &&
              wishState.wishlist.find(
                (prod) => prod._id === singleProduct._id
              ) ? (
                <button
                  className="button button-secondary button-text-icon"
                  onClick={() => navigate("/wishlist")}
                >
                  <span>Go to Wishlist</span>
                </button>
              ) : (
                <button
                  className="button button-secondary button-text-icon"
                  onClick={() =>
                    isAuth
                      ? addToWishlist(singleProduct, token, wishDispatch)
                      : navigate(
                          "/login",
                          { state: { from: location } },
                          { replace: true }
                        )
                  }
                >
                  <span>
                    <i className="far fa-heart"></i>Add to Wishlist
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
