import { useNavigate } from "react-router-dom";
import { useWishlist, useCart, useAuth } from "../../contexts";
import { addToCart, removeFromWishlist } from "../../utilities";
import "../../styles/main.css";
import "../../components/product-list/product-list.css";

const WishlistCard = ({ product }) => {
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
    coverImg,
    categoryName,
  } = product;
  const { wishDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const {
    auth: { token },
  } = useAuth();
  const navigate = useNavigate();

  const discountValid = discountRate === 0 ? false : true;
  return (
    <div className="card card-vertical card-shadow" id={_id}>
      <div className="p-3 img-badge-container">
        {tag && <span className="vt-card-badge txt-small p-3">{tag}</span>}
        <img
          src={coverImg}
          alt="Wishlist Item Photo"
          className="img-responsive vt-card-img"
        />
      </div>
      <div className="vt-card-text p-3">
        <h2>{name}</h2>
        <p className="card-brand-name my-4">{brand}</p>
        <span className="rating d-inline">
          {rating} <i className="fas fa-star"></i>
          <span className="text-small">| ({reviews} reviews)</span>
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
          {cartState.cart.find((item) => item._id === _id) ? (
            <button
              className="button button-primary button-text-icon"
              onClick={() => navigate("/cart")}
            >
              <span>Go to Cart</span>
            </button>
          ) : (
            <button
              className="button button-primary button-text-icon"
              onClick={() => addToCart(product, token, cartDispatch)}
            >
              <span>
                <i className="fas fa-shopping-cart"></i> Move to Cart
              </span>
            </button>
          )}

          <button
            className="button btn-outline button-secondary"
            onClick={() => removeFromWishlist(_id, token, wishDispatch)}
          >
            <span>
              <i className="far fa-trash-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
