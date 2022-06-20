import { createContext, useContext, useReducer, useEffect } from "react";
import { AddressReducer } from "../reducers";
import { useAuth } from "./auth-context";
import { fetchAddress } from "../utilities";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(AddressReducer, {
    addresses: [],
    showAddressModal: false,
    setEditAddressId: null,
    selectedAddress: null,
  });
  const {
    auth: { token },
  } = useAuth();

  useEffect(() => {
    if (token) fetchAddress(token, addressDispatch);
  }, [token]);

  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);
export { useAddress, AddressProvider };
