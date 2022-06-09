import axios from "axios";

const fetchSingleProduct = (productId) => {
    return axios.get(`/api/products/${productId}`);
};

export { fetchSingleProduct };
