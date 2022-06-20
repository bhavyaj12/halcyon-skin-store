const AddressReducer = (addressState, { type, payload }) => {
  switch (type) {
    case "FETCH_ADDRESS":
      return {
        ...addressState,
        addresses: payload,
      };

    case "SET_ADDRESS":
      return {
        ...addressState,
        addresses: payload,
      };

    case "SET_EDIT_ADDRESS":
      return {
        ...addressState,
        setEditAddressId: payload,
      };

    case "SHOW_MODAL":
      return {
        ...addressState,
        showAddressModal: payload,
      };

    case "SELECT_ADDRESS":
      return {
        ...addressState,
        selectedAddress: payload,
      };

    case "UPDATE_SELECTED_ADDRESS":
      const updatedSelectedAddr = addressState.addresses?.find(
        (address) => address._id === addressState.setEditAddressId
      );
      return {
        ...addressState,
        selectedAddress: updatedSelectedAddr,
      };

    default:
      return addressState;
  }
};

export { AddressReducer };
