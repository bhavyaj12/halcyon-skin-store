import { WishlistCard } from "../../components";
import { useWishlist } from "../../contexts";
import "./wishlist-page.css";

const WishlistPage = () => {
  const { wishState } = useWishlist();
  return (
    <section>
      <div className="cart-heading container-center mt-8">
        <h4 className="h4">My Wishlist ({wishState.wishlist.length})</h4>
      </div>
      {wishState.wishlist.length === 0 ? (
        <main className="page-container wishlist-alert">
          <div className="alert-container alert-error txt-normal">
            No items in Wishlist, add from Shop Now
          </div>
        </main>
      ) : (
        <main className="wishlist-container">
          {wishState.wishlist.map((product) => {
            return <WishlistCard product={product} key={product._id} />;
          })}
        </main>
      )}
    </section>
  );
};

export default WishlistPage;
