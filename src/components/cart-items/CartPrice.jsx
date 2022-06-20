import { useNavigate } from "react-router-dom";
import { useCart, useAddress } from "../../contexts";
import { getCartData } from "../../utilities";
import Coupons from "./Coupons";

const CartPrice = () => {
  const { cartState } = useCart();
  const {
    addressState: { selectedAddress },
  } = useAddress();

  const navigate = useNavigate();
  const { itemsPrice, numItems, checkoutDiscount, grandTotal, couponDiscount } =
    getCartData(cartState);

  const isCouponApplied = cartState.selectedCoupon ? true : false;
  const selectAddress = (e) => {
    e.preventDefault();
    navigate("/address");
  };

  return (
    <div className="cart-checkout px-5">
      <div className="card card-text-only card-flex">
        <h5 className="h5">Price Details</h5>
        <div className="cart-price-row">
          <p>No. of items in your bag</p>
          <p>{numItems}</p>
        </div>
        <div className="cart-price-row">
          <p>Sub Total</p>
          <p>₹{itemsPrice}</p>
        </div>
        <div className="cart-price-row">
          <p>Shipping Charge</p>
          <p className="discount">Free</p>
        </div>
        <div className="cart-price-row">
          <p>Item Discount</p>
          <p className="discount">- ₹{checkoutDiscount}</p>
        </div>
        {itemsPrice > 700 ? (
          <div className="cart-price-row">
            <Coupons />
          </div>
        ) : (
          <div className="coupon-worth-msg">
            Coupons available - add items to cart worth ₹{700 - itemsPrice}
          </div>
        )}
        {isCouponApplied ? (
          <div className="cart-price-row">
            <p>Coupon Discount</p>
            <p className="discount">- ₹{couponDiscount}</p>
          </div>
        ) : null}
        <div className="cart-price-row txt-medium my-4 grand-total">
          <p className="cart-total">Grand Total</p>
          <p className="cart-total">₹{grandTotal}</p>
        </div>
        <div className="cart-price-row my-6">
          {selectedAddress ? (
            <button className="button btn-solid button-primary cart-pay-btn">
              <span>Place Order &amp; Pay</span>
            </button>
          ) : (
            <button className="button btn-solid button-primary button-disabled cart-pay-btn">
              <span>Place Order</span>
            </button>
          )}
        </div>
      </div>
      <div className="card card-text-only card-flex">
        <h5 className="h5">Selected Address</h5>
        {selectedAddress ? (
          <>
            <p>{selectedAddress.name + " - " + selectedAddress.mobile}</p>
            <p>
              {selectedAddress.street +
                ", " +
                selectedAddress.city +
                ", " +
                selectedAddress.state +
                " - " +
                selectedAddress.zipCode}
            </p>
            <button
              className="button btn-solid button-secondary btn-no-decor"
              onClick={(e) => selectAddress(e)}
            >
              <span>Change Address</span>
            </button>
          </>
        ) : (
          <>
            <p>Please select address to place order</p>
            <button
              className="button btn-solid button-secondary btn-no-decor"
              onClick={(e) => selectAddress(e)}
            >
              <span>Select Address</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPrice;
