import axios from "axios";
import { useToast } from "../custom-hooks";

const { showToast } = useToast();

const fetchAddress = async (token, addressDispatch) => {
  try {
    const {
      data: { address },
    } = await axios.get("/api/user/address", {
      headers: { authorization: token },
    });
    addressDispatch({ type: "FETCH_ADDRESS", payload: address });
  } catch (error) {
    showToast("error", "Can't fetch addresses, try again later or reload.");
  }
};

const addAddress = async (data, token, addressDispatch) => {
  try {
    const {
      data: { address },
    } = await axios.post("/api/user/address", data, {
      headers: { authorization: token },
    });
    addressDispatch({
      type: "SET_ADDRESS",
      payload: address,
    });
    showToast("success", "Added new address");
  } catch (error) {
    showToast("error", "Can't add new address, try again later or reload.");
  }
};

const editAddress = async (Id, token, editedAddress, addressDispatch) => {
  try {
    const {
      data: { address },
    } = await axios.post(`/api/user/address/${Id}`, editedAddress, {
      headers: { authorization: token },
    });
    showToast("success", "Edited address successfully.");
    addressDispatch({
      type: "SET_ADDRESS",
      payload: address,
    });
  } catch (error) {
    showToast("error", "Can't edit address, try again later or reload.");
  }
};

const removeAddress = async (_id, token, addressDispatch) => {
  try {
    const {
      data: { address },
    } = await axios.delete(`/api/user/address/${_id}`, {
      headers: { authorization: token },
    });
    showToast("success", "Removed address.");
    addressDispatch({
      type: "SET_ADDRESS",
      payload: address,
    });
  } catch (error) {
    showToast("error", "Can't remove address, try again later or reload.");
  }
};

export { fetchAddress, addAddress, editAddress, removeAddress };
