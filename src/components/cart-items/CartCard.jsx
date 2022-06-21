import { Link, useLocation } from "react-router-dom";
import { useWishlist, useAuth, useCart } from "../../contexts";
import { removeFromCart, updateQuantity, addToWishlist } from "../../utilities";
import "../../pages/cart-page/cart.css";

const CartCard = ({ product }) => {
  const {
    _id,
    name,
    brand,
    discountPrice,
    originalPrice,
    discountRate,
    coverImg,
    qty,
  } = product;
  const {
    auth: { token },
  } = useAuth();
  const { cartDispatch } = useCart();
  const { wishState, wishDispatch } = useWishlist();
  const discountValid = discountRate === 0 ? false : true;
  const location = useLocation();

  return (
    <div className="card card-hz" id={_id}>
      <div className="p-3">
        <img
          src={coverImg}
          alt="Wishlist Item Photo"
          className="img-responsive hz-card-img"
        />
      </div>
      <div className="hz-card-text p-3">
        <h5 className="h5">{name}</h5>
        <p>{brand}</p>
        {location.pathname !== "/order-summary" && (
          <div className="mt-5 card-price">
            <span className="d-inline">₹ {discountPrice}</span>
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
          </div>
        )}
        <div className="cart-quantity-container">
          {location.pathname !== "/order-summary" && (
            <button
              className="button btn-outline button-secondary quant-btn"
              disabled={qty <= 1}
              onClick={() =>
                updateQuantity("decrement", _id, token, cartDispatch)
              }
            >
              <span>
                <i className="fas fa-minus"></i>
              </span>
            </button>
          )}
          <button className="button btn-outline button-secondary">
            <span>{qty}</span>
          </button>
          {location.pathname !== "/order-summary" && (
            <button
              className="button btn-outline button-secondary quant-btn"
              onClick={() =>
                updateQuantity("increment", _id, token, cartDispatch)
              }
            >
              <span>
                <i className="fas fa-plus"></i>
              </span>
            </button>
          )}
        </div>
        {location.pathname !== "/order-summary" && (
          <div className="card-hz-btn mt-5 flex-col">
            {wishState.wishlist.find((prod) => prod._id === _id) ? (
              <Link to="/wishlist">
                <button className="button btn-solid button-primary">
                  Go To Wishlist
                </button>
              </Link>
            ) : (
              <button
                className="button button-primary button-text-icon"
                onClick={() => addToWishlist(product, token, wishDispatch)}
              >
                <span>
                  <i className="far fa-heart"></i>
                  Add to Wishlist
                </span>
              </button>
            )}
            <button
              className="button btn-outline button-secondary"
              onClick={() => removeFromCart(_id, token, cartDispatch)}
            >
              <span>Remove from Cart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCard;
