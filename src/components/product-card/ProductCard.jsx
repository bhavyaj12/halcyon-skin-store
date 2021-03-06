import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useWishlist, useCart } from "../../contexts";
import { addToCart, addToWishlist, removeFromWishlist } from "../../utilities";
import { useToast } from "../../custom-hooks";
import "./product-card.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brand,
    rating,
    reviews,
    discountPrice,
    originalPrice,
    discountRate,
    tag,
    inStock,
    coverImg,
    categoryName,
  } = product;
  const { wishState, wishDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const {
    auth: { isAuth, token },
  } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToLogin = () => {
    navigate("/login", { state: { from: location } }, { replace: true });
    showToast("error", "Please login to add items to cart and wishlist.");
  };

  const discountValid = discountRate === 0 ? false : true;
  if (!inStock) {
    return (
      <div
        className="card card-vertical card-shadow pos-relative"
        id={_id}
        onClick={() => navigate(`/products/${_id}`)}
      >
        <div className="overlay-container">
          <div className="p-3 img-badge-container">
            {tag && <span className="vt-card-badge txt-small p-3">{tag}</span>}
            <img
              src={coverImg}
              alt="Purple Soap"
              className="img-responsive vt-card-img"
            />
          </div>
          <div className="vt-card-text p-3">
            <span className="product-name">{name}</span>
            <p className="card-brand-name my-4">{brand}</p>
            <span className="rating d-inline">
              {rating} <i className="fas fa-star"></i>
              <span className="text-small"> | ({reviews} reviews)</span>
            </span>
            <div className="pt-3 card-price">
              <span className="d-inline txt-bold">₹ {discountPrice}</span>
              {discountValid && (
                <span className="txt-small ml-2 d-inline">
                  <strike>₹ {originalPrice}</strike>
                </span>
              )}
              {discountValid && (
                <span className="discount ml-2 txt-small txt-bold">
                  ( {discountRate}% OFF )
                </span>
              )}
              <span className="alert-container alert-primary txt-small category-tag">
                {categoryName}
              </span>
            </div>
            <div className="card-vt-btn mt-5 ">
              <button className="button button-primary button-text-icon">
                <span>
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </span>
              </button>
              <button className="button btn-outline button-secondary">
                <span>
                  <i className="far fa-heart"></i>
                </span>
              </button>
            </div>
          </div>
          <span className="text-overlay txt-medium p-5">Out of Stock</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-vertical card-shadow" id={_id}>
      <div className="p-3 img-badge-container">
        {tag && <span className="vt-card-badge txt-small p-3">{tag}</span>}
        <img
          src={coverImg}
          alt="Product Image"
          className="img-responsive vt-card-img"
          onClick={() => navigate(`/products/${_id}`)}
        />
      </div>
      <div className="vt-card-text p-3">
        <span className="product-name">{name}</span>
        <p className="card-brand-name my-4">{brand}</p>
        <span className="rating d-inline">
          {rating} <i className="fas fa-star"></i>
          <span className="text-small"> | ({reviews} reviews)</span>
        </span>
        <div className="pt-3 card-price">
          <span className="d-inline txt-bold">₹ {discountPrice}</span>
          {discountValid && (
            <span className="txt-small ml-2 d-inline">
              <strike>₹ {originalPrice}</strike>
            </span>
          )}
          {discountValid && (
            <span className="discount ml-2 txt-small txt-bold">
              ( {discountRate}% OFF )
            </span>
          )}
          <span className="alert-container alert-primary txt-small category-tag">
            {categoryName}
          </span>
        </div>
        <div className="card-vt-btn mt-5">
          {cartState.cart.find((item) => item._id === _id) ? (
            <button
              className="button button-primary button-text-icon"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              <span>Go to Cart</span>
            </button>
          ) : (
            <button
              className="button button-primary button-text-icon"
              onClick={(e) => {
                e.preventDefault();
                isAuth
                  ? addToCart(product, token, cartDispatch)
                  : navigateToLogin();
              }}
            >
              <span>
                <i className="fas fa-shopping-cart"></i>
                Add to Cart
              </span>
            </button>
          )}

          {wishState.wishlist.length !== 0 &&
          wishState.wishlist.find((prod) => prod._id === _id) ? (
            <button
              className="button btn-outline button-secondary"
              onClick={(e) => {
                e.preventDefault();
                removeFromWishlist(_id, token, wishDispatch);
              }}
            >
              <span>
                <i className="fa fa-heart"></i>
              </span>
            </button>
          ) : (
            <button
              className="button btn-outline button-secondary"
              onClick={(e) => {
                e.preventDefault();
                isAuth
                  ? addToWishlist(product, token, wishDispatch)
                  : navigateToLogin();
              }}
            >
              <span>
                <i className="far fa-heart"></i>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
