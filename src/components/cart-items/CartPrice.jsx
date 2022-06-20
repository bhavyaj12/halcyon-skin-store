import { useNavigate } from "react-router-dom";
import { useCart, useAddress, useAuth, useOrder } from "../../contexts";
import { getCartData } from "../../utilities";
import { useToast } from "../../custom-hooks";
import logo from "../../assets/images/logo192.png";
import Coupons from "./Coupons";

const CartPrice = () => {
  const { cartState, cartDispatch } = useCart();
  const {
    auth: { userObj },
  } = useAuth();
  const {
    addressState: { selectedAddress },
  } = useAddress();
  const { setOrder } = useOrder();
  const { showToast } = useToast();

  const rzpUrl = "https://checkout.razorpay.com/v1/checkout.js";
  const showCheckoutWithRazorpay = async (rzpUrl) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = rzpUrl;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
      document.body.appendChild(script);
    });
  };

  const navigate = useNavigate();
  const { itemsPrice, numItems, checkoutDiscount, grandTotal, couponDiscount } =
    getCartData(cartState);

  const isCouponApplied = cartState.selectedCoupon ? true : false;
  const selectAddress = (e) => {
    e.preventDefault();
    navigate("/address");
  };

  const clearCart = () => {
    cartDispatch({ type: "RESET_CART" });
  };

  const paymentHandler = async () => {
    const response = await showCheckoutWithRazorpay(rzpUrl);
    if (!response) {
      showToast(
        "error",
        "Could not load razorpay payment options, please try again later or reload."
      );
      return;
    }
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: grandTotal * 100,
      currency: "INR",
      name: "Halcyon Skin Store",
      description: "Thank you for your order!",
      image: logo,
      handler: async function (response) {
        const { razorpay_payment_id } = await response;
        const orderDetails = {
          paymentId: razorpay_payment_id,
          amountPaid: grandTotal,
          shippingAddress: { ...selectedAddress },
          itemsOrdered: [...cartState.cart],
        };
        setOrder(orderDetails);
        clearCart();
        setTimeout(() => {
          navigate("/order-summary");
        }, 500);
      },
      prefill: {
        name: `${userObj?.firstName} ${userObj?.lastName}`,
        email: userObj?.email,
        contact: "9121984305",
      },
      theme: { color: "#7e17c8" },
    };
    const rzpPaymentObj = new Razorpay(options);
    rzpPaymentObj.open();
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
            <button
              className="button btn-solid button-primary cart-pay-btn"
              onClick={() => paymentHandler()}
            >
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
