import axios from "axios";
import { useEffect } from "react";
import { useToast } from "../../custom-hooks";
import {
  filteredCatProducts,
  filteredPriceProducts,
  sortedProducts,
  filteredRatingProducts,
} from "../../utilities/filterFunctions.js";
import { useAuth, useProduct } from "../../contexts";
import { Filters } from "../../components";
import { ProductList } from "../../components";
import "./products-page.css";

const ProductsPage = () => {
  const { state, dispatch } = useProduct();
  const { auth: token } = useAuth();
  const { showToast } = useToast();
  const filteredPrice = filteredPriceProducts(state.products, state.price);
  const filteredCategory = filteredCatProducts(
    filteredPrice,
    state.categories.Sunscreen,
    state.categories.Serums,
    state.categories.Moisturizers,
    state.categories.Cleanser,
    state.categories.Bodycare
  );
  const ratingFiltered = filteredRatingProducts(filteredCategory, state.rating);
  const finalProducts = sortedProducts(ratingFiltered, state.sortBy);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "INIT_PRODUCTS", payload: products });
      } catch (error) {
        showToast("error", "Can't fetch products, try again later.")
      }
    })();
  }, [token]);

  return (
    <main className="products-filters-page">
      <Filters />
      <ProductList products={finalProducts} />
    </main>
  );
};

export default ProductsPage;
