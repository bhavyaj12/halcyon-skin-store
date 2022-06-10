import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts";
import { useToast } from "../../custom-hooks";
import axios from "axios";
import "./searchbar.css";

const SearchBar = () => {
  const { state, dispatch } = useProduct();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "INIT_PRODUCTS", payload: products });
      } catch (error) {
        showToast("error", "Can't fetch products, try again later.");
      }
    })();
  }, []);

  const searchForProducts = (searchQuery) => {
    return state.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const searchList = searchForProducts(searchQuery).map((product) => (
    <li
      key={product._id}
      onClick={(e) => {
        setSearchQuery("");
        navigate(`/products/${product._id}`);
      }}
      className="search-result-item p-2 m-2"
      product={JSON.stringify(product)}
    >
      {product.name}
    </li>
  ));

  return (
    <div className="search-container">
      <li className="search-bar">
        <input
          type="search"
          placeholder="Search our skincare store"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label className="search-bar-icon">
          <span className="fas fa-search"></span>
        </label>
      </li>
      <div
        className={
          searchQuery.length !== 0
            ? "search-result-dropdown p-2"
            : "search-display-none"
        }
      >
        <ul className="search-result-list flex-col">
          {searchList.length > 0 ? (
            searchList
          ) : (
            <li className="search-result-item not-found p-2 m-2">
              No Products
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
