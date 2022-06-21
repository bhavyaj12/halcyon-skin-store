import { useOrder } from "../../contexts";
import { CartCard } from "../../components";
import "./order-summary.css";

const OrderSummaryPage = () => {
  const { order } = useOrder();
  return (
    <>
      <h1 className="h1 text-center order-summary-heading">Order Summary</h1>
      <div className="order-summary-card">
        <section className="items-ordered">
          {order?.itemsOrdered.map((item) => (
            <CartCard key={item._id} product={item} />
          ))}
        </section>
        <section className="payment-details">
          <h3 className="h3 order-confirm-msg py-2">Your order is confirmed!</h3>
          <p>Payment Receipt ID: {order.paymentId}</p>
          <p>Amount Paid: ₹{order.amountPaid}</p>
          <h3 className="h3 shipping-msg py-2">Shipping Details</h3>
          <p>
            {order.shippingAddress.name + " - " + order.shippingAddress.mobile}
          </p>
          <p>{order.shippingAddress.street + ", "}</p>
          <p>{order.shippingAddress.city + ", "}</p>
          <p>
            {order.shippingAddress.state +
              " - " +
              order.shippingAddress.zipCode}
          </p>
        </section>
      </div>
    </>
  );
};

export default OrderSummaryPage;
