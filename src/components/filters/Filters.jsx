import "./filters.css";

import { useProduct } from "../../contexts";

const Filters = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, categories, price, rating } = state;
  const { Sunscreen, Serums, Moisturizers, Cleanser, Bodycare } = categories;

  return (
    <section id="filters">
      <aside className="filter-container">
        <div className="heading-filter pt-8">
          <p className="txt-normal">Filters</p>
          <button
            className="filter-clear-btn button button-primary button-link"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>

        <div className="filter-type-container">
          <p className="filter-name txt-normal">Price: ₹{price}</p>
          <div className="filter-content">
            <label htmlFor="price-slider">₹200 - ₹2000</label>
            <input
              type="range"
              id="price-slider"
              min="0"
              max="2000"
              step={200}
              value={price}
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
              className="slider"
            />
          </div>
        </div>

        <div className="filter-type-container">
          <p className="filter-name txt-normal">Category</p>
          <div className="filter-content">
            {
              <input
                type="checkbox"
                id="cat1"
                value="Sunscreen"
                checked={Sunscreen}
                onChange={() => dispatch({ type: "SUNSCREEN" })}
              />
            }
            <label htmlFor="cat1"> Sunscreen</label>
          </div>
          <div className="filter-content">
            {
              <input
                type="checkbox"
                id="cat2"
                value="Serums"
                checked={Serums}
                onChange={() => dispatch({ type: "SERUMS" })}
              />
            }
            <label htmlFor="cat2"> Serums</label>
          </div>
          <div className="filter-content">
            {
              <input
                type="checkbox"
                id="cat3"
                value="Moisturizers"
                checked={Moisturizers}
                onChange={() => dispatch({ type: "MOISTURIZERS" })}
              />
            }
            <label htmlFor="cat3"> Moisturizers</label>
          </div>
          <div className="filter-content">
            {
              <input
                type="checkbox"
                id="cat4"
                value="Cleanser"
                checked={Cleanser}
                onChange={() => dispatch({ type: "CLEANSER" })}
              />
            }
            <label htmlFor="cat4"> Cleanser</label>
          </div>
          <div className="filter-content">
            {
              <input
                type="checkbox"
                id="cat5"
                value="Bodycare"
                checked={Bodycare}
                onChange={() => dispatch({ type: "BODYCARE" })}
              />
            }
            <label htmlFor="cat5"> Bodycare</label>
          </div>
        </div>

        <div className="filter-type-container filter-ratings">
          <p className="filter-name txt-normal ">Avg. Customer Rating</p>
          <div className="filter-content">
            <input
              type="radio"
              name="filter-rating-star"
              id="filter-star-four"
              value="4"
              checked={rating === 4}
              onChange={(e) =>
                dispatch({ type: "RATING", payload: parseInt(e.target.value) })
              }
            />
            <label htmlFor="filter-star-four">
              {" "}
              4 <i className="fas fa-star"></i> & Up
            </label>
          </div>
          <div className="filter-content">
            <input
              type="radio"
              name="filter-rating-star"
              id="filter-star-three"
              value="3"
              checked={rating === 3}
              onChange={(e) =>
                dispatch({ type: "RATING", payload: parseInt(e.target.value) })
              }
            />
            <label htmlFor="filter-star-three">
              {" "}
              3 <i className="fas fa-star"></i> & Up
            </label>
          </div>
          <div className="filter-content">
            <input
              type="radio"
              name="filter-rating-star"
              id="filter-star-two"
              value="2"
              checked={rating === 2}
              onChange={(e) =>
                dispatch({ type: "RATING", payload: parseInt(e.target.value) })
              }
            />
            <label htmlFor="filter-star-two">
              {" "}
              2 <i className="fas fa-star"></i> & Up
            </label>
          </div>
          <div className="filter-content">
            <input
              type="radio"
              name="filter-rating-star"
              id="filter-star-one"
              value="1"
              checked={rating === 1}
              onChange={(e) =>
                dispatch({ type: "RATING", payload: parseInt(e.target.value) })
              }
            />
            <label htmlFor="filter-star-one">
              {" "}
              1 <i className="fas fa-star"></i> & Up
            </label>
          </div>
        </div>

        <div className="filter-type-container">
          <p className="filter-name txt-normal">Sort By</p>
          <div className="filter-content">
            <input
              type="radio"
              id="price_lth"
              name="sort-by"
              checked={sortBy === "PRICE_LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            />

            <label htmlFor="price_lth"> Price - Low to High</label>
          </div>
          <div className="filter-content">
            <input
              type="radio"
              id="price_htl"
              name="sort-by"
              checked={sortBy === "PRICE_HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            />
            <label htmlFor="price_htl"> Price - High to Low</label>
          </div>
          <div className="filter-content">
            <input
              type="radio"
              id="rate_htl"
              name="sort-by"
              checked={sortBy === "RATING_HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "RATING_HIGH_TO_LOW" })}
            />
            <label htmlFor="rate_htl"> Rating - High to Low</label>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Filters;
