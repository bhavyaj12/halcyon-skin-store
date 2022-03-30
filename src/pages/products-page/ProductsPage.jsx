import "./products-page.css";

import axios from "axios";
import { useEffect } from "react";
import {
  filteredCatProducts,
  filteredPriceProducts,
  sortedProducts,
  filteredRatingProducts,
} from "../../utilities/filterFunctions.js";
import { useProduct } from "../../contexts";
import { Filters } from "../../components";
import { ProductList } from "../../components";

export default function ProductsPage() {
  const { state, dispatch } = useProduct();
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
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "INIT_PRODUCTS", payload: products });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="products-filters-page">
      <Filters />
      <ProductList products={finalProducts}/>
    </main>
  );
}
