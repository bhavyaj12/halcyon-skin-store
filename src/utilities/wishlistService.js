import axios from "axios";
import { useToast } from "../custom-hooks";

const { showToast } = useToast();

const fetchWishlist = async (wishDispatch, token) => {
  try {
    const { data } = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    wishDispatch({ type: "FETCH_WISHLIST", payload: data.wishlist });
  } catch (error) {
    showToast("error", "Can't fetch wishlist, try again later or reload.");
  }
};

const addToWishlist = async (product, token, wishDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );
    wishDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    showToast("success", "Added to wishlist");
  } catch (error) {
    showToast("error", "Can't add to wishlist, try again later or reload.");
  }
};

const removeFromWishlist = async (_id, token, wishDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
    showToast("success", "Removed from wishlist");
    wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.wishlist });
  } catch (error) {
    showToast(
      "error",
      "Can't remove from wishlist, try again later or reload."
    );
  }
};

export { fetchWishlist, addToWishlist, removeFromWishlist };
