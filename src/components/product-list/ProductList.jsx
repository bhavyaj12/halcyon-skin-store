import "../../styles/main.css";
import "./product-list.css";

import { ProductCard } from "../../components";

const ProductList = ({ products }) => {
  return (
    <div>
      <p className="num-products txt-normal">
        Number of Products:{" "}
        <span className="primary-color">{products.length}</span>
      </p>
      <section className="products-container">
        {products.length > 0 ? (
          products.map((item) => {
            return <ProductCard product={item} key={item._id} />;
          })
        ) : (
          <p className="alert-container alert-error txt-medium">
            No Products Found
          </p>
        )}
      </section>
    </div>
  );
};

export default ProductList;
