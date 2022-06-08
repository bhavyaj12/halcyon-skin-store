import { useCart } from "../../contexts";

const CartPrice = () => {
  const { cartState } = useCart();
  const itemsPrice = cartState.cart.reduce(
    (acc, curr) => acc + Number(curr.originalPrice) * Number(curr.qty),
    0
  );
  const numItems = cartState.cart.reduce(
    (acc, curr) => acc + Number(curr.qty),
    0
  );
  const checkoutDiscount = cartState.cart.reduce(
    (acc, curr) =>
      acc +
      Number(curr.originalPrice - curr.discountPrice) * Number(curr.qty),
    0
  );

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
          <p>Discount</p>
          <p className="discount">- ₹{checkoutDiscount}</p>
        </div>
        <div className="cart-price-row txt-medium my-4">
          <p className="cart-total">Grand Total</p>
          <p className="cart-total">₹{itemsPrice - checkoutDiscount}</p>
        </div>
        <div className="cart-price-row my-6">
          <a href="#" className="button btn-solid button-primary cart-pay-btn">
            <span>Place Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPrice;
