import axios from "axios";

const fetchSingleProduct = (productId) => {
  return axios.get(`/api/products/${productId}`);
};

const fetchCategories = () => {
  return axios.get("/api/categories");
};

export { fetchSingleProduct, fetchCategories };
