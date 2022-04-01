import { Link } from "react-router-dom";
import { CartCard, CartPrice } from "../../components";
import { useCart } from "../../contexts";
import "../../styles/main.css";
import "./cart.css";

export default function CartPage() {
  const { cartState } = useCart();
  return (
    <main className="cart-main-container">
      <div className="cart-heading container-center my-8">
        <h4>My Cart</h4>
      </div>
      <section className="cart-cards-container">
        <div className="cart-items">
          {cartState.cart.length > 0 ? (
            cartState.cart.map((item) => {
              return <CartCard product={item} key={item._id} />;
            })
          ) : (
            <div>
              <p className="alert-container alert-error txt-medium">
                No Products Found
              </p>
              <Link to="/products">
                <button className="button btn-solid button-primary">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
        </div>
        <CartPrice />
      </section>
    </main>
  );
}
