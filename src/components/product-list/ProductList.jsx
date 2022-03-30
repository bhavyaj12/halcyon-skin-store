import "../../styles/main.css";
import "./product-list.css";

import { ProductCard } from "../../components";

export default function ProductList({ products }) {
  return (
    <div>
      <p className="num-products txt-normal">Number of Products: <span className="primary-color">{products.length}</span></p>
      <section className="products-container">
        {products.length > 0 ? (
          products.map((item) => {
            return (
              <ProductCard
                name={item.name}
                brand={item.brand}
                rating={item.rating}
                reviews={item.reviews}
                discountPrice={item.discountPrice}
                originalPrice={item.originalPrice}
                discountRate={item.discountRate}
                tag={item.tag}
                inStock={item.inStock}
                coverImg={item.coverImg}
                categoryName={item.categoryName}
              />
            );
          })
        ) : (
          <p className="alert-container alert-error txt-medium">
            No Products Found
          </p>
        )}
      </section>
    </div>
  );
}
