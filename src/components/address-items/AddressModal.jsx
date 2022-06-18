import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useAuth, useAddress } from "../../contexts";
import { addAddress, editAddress } from "../../utilities";
import "./address-modal.css";

const AddressModal = () => {
  const {
    auth: { token },
  } = useAuth();
  const {
    addressState: { addresses, setEditAddressId, selectedAddress },
    addressDispatch,
  } = useAddress();

  const addressEditData =
    setEditAddressId &&
    addresses?.find((address) => address._id === setEditAddressId);

  const [addressFields, setAddressFields] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const [addressError, setAddressError] = useState({
    nameError: "",
    streetError: "",
    cityError: "",
    stateError: "",
    zipCodeError: "",
    mobileError: "",
    allError: "",
  });

  useEffect(() => {
    if (setEditAddressId) {
      setAddressFields(addressEditData);
    }
  }, [setEditAddressId]);

  const validateAddress = ({ name, street, city, state, zipCode, mobile }) => {
    if (
      name === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zipCode === "" ||
      mobile === ""
    ) {
      setAddressError({ ...addressError, allError: "Please fill all fields." });
      return false;
    }
    if (name.trim().length <= 2) {
      setAddressError({
        ...addressError,
        nameError: "Name should be more than 2 characters.",
      });
      return false;
    }
    if (!/^[a-zA-Z]+(\s*[a-zA-Z])*$/.test(name)) {
      setAddressError({
        ...addressError,
        nameError: "Name should only contain letters.",
      });
      return false;
    }
    if (street.trim().length < 10) {
      setAddressError({
        ...addressError,
        streetError: "House no., Street name should be more than 9 characters.",
      });
      return false;
    }
    if (city.trim().length < 3) {
      setAddressError({
        ...addressError,
        cityError: "City name should be more than 2 characters.",
      });
      return false;
    }
    if (!/^[a-zA-Z]+(\s*\'*\-*[\w*])*$/.test(city)) {
      setAddressError({
        ...addressError,
        cityError: "City name is invalid.",
      });
      return false;
    }
    if (state.trim().length < 3) {
      setAddressError({
        ...addressError,
        stateError: "State should be more than 2 characters.",
      });
      return false;
    }
    if (!/^[a-zA-Z]+(\s*.*[a-zA-Z])*$/.test(state)) {
      setAddressError({
        ...addressError,
        stateError: "State name is invalid.",
      });
      return false;
    }
    if (!/^[1-9]\d{5}$/.test(zipCode)) {
      setAddressError({
        ...addressError,
        zipCodeError: "Pin code is invalid.",
      });
      return false;
    }
    if (!/^(0|\+91)?[6-9]\d{9}$/.test(mobile)) {
      setAddressError({
        ...addressError,
        mobileError: "Mobile no. is invalid, should have 10 digits.",
      });
      return false;
    }

    return true;
  };

  const saveAddressHandler = async (e) => {
    e.preventDefault();
    let validated = validateAddress({ ...addressFields });
    if (validated) {
      setEditAddressId
        ? await editAddress(
            setEditAddressId,
            token,
            { address: { ...addressFields } },
            addressDispatch
          )
        : await addAddress(
            { address: { _id: uuid(), ...addressFields } },
            token,
            addressDispatch
          );

      if (setEditAddressId === selectedAddress?._id) {
        addressDispatch({
          type: "UPDATE_SELECTED_ADDRESS",
        });
      }
      addressDispatch({
        type: "SET_EDIT_ADDRESS",
        payload: null,
      });
      addressDispatch({
        type: "SHOW_MODAL",
        payload: false,
      });
    }
  };

  const dummyAddressHandler = (e) => {
    e.preventDefault();
    setAddressFields({
      name: "Bhavya Joshi",
      street: "H.no - 1, Hennur Road",
      city: "Bangalore",
      state: "Karnataka",
      zipCode: 560043,
      mobile: "8493750274",
    });
  };

  const cancelAddressHandler = (e) => {
    e.preventDefault();
    setAddressFields({
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      mobile: "",
    });
    addressDispatch({
      type: "SET_EDIT_ADDRESS",
      payload: null,
    });
    addressDispatch({
      type: "SHOW_MODAL",
      payload: false,
    });
  };

  return (
    <div className="model-demo-wrapper">
      <div className="modal-container">
        <form className="modal-text-container p-4">
          <input
            type="text"
            placeholder="Enter full name *"
            className="p-3 my-4"
            value={addressFields.name}
            onChange={(e) => {
              setAddressError({ ...addressError, allError: "", nameError: "" });
              setAddressFields({ ...addressFields, name: e.target.value });
            }}
            required
          />
          {addressError.nameError !== "" && (
            <div className="text-error">{addressError.nameError}</div>
          )}
          <input
            type="text"
            placeholder="Enter house no., house street *"
            className="p-3 my-4"
            value={addressFields.street}
            onChange={(e) => {
              setAddressError({
                ...addressError,
                allError: "",
                streetError: "",
              });
              setAddressFields({ ...addressFields, street: e.target.value });
            }}
            required
          />
          {addressError.streetError !== "" && (
            <div className="text-error">{addressError.streetError}</div>
          )}
          <input
            type="text"
            placeholder="Enter city *"
            className="p-3 my-4"
            value={addressFields.city}
            onChange={(e) => {
              setAddressError({ ...addressError, allError: "", cityError: "" });
              setAddressFields({ ...addressFields, city: e.target.value });
            }}
            required
          />
          {addressError.cityError !== "" && (
            <div className="text-error">{addressError.cityError}</div>
          )}
          <input
            type="text"
            placeholder="Enter state *"
            className="p-3 my-4"
            value={addressFields.state}
            onChange={(e) => {
              setAddressError({
                ...addressError,
                allError: "",
                stateError: "",
              });
              setAddressFields({ ...addressFields, state: e.target.value });
            }}
            required
          />
          {addressError.stateError !== "" && (
            <div className="text-error">{addressError.stateError}</div>
          )}
          <input
            type="text"
            placeholder="Enter pincode *"
            className="p-3 my-4"
            value={addressFields.zipCode}
            onChange={(e) => {
              setAddressError({
                ...addressError,
                allError: "",
                zipCodeError: "",
              });
              setAddressFields({ ...addressFields, zipCode: e.target.value });
            }}
            required
          />
          {addressError.zipCodeError !== "" && (
            <div className="text-error">{addressError.zipCodeError}</div>
          )}
          <input
            type="text"
            placeholder="Enter mobile no. *"
            className="p-3 my-4"
            value={addressFields.mobile}
            onChange={(e) => {
              setAddressError({
                ...addressError,
                allError: "",
                mobileError: "",
              });
              setAddressFields({ ...addressFields, mobile: e.target.value });
            }}
            required
          />
          {addressError.mobileError !== "" && (
            <div className="text-error">{addressError.mobileError}</div>
          )}
          {addressError.allError !== "" && (
            <div className="text-error">{addressError.allError}</div>
          )}
          <div className="edit-address-footer flex-row my-3">
            <button
              className="button btn-solid button-secondary"
              onClick={cancelAddressHandler}
            >
              Cancel
            </button>
            <button
              className="button btn-solid button-secondary"
              onClick={dummyAddressHandler}
            >
              Fill dummy values
            </button>
            <button
              type="submit"
              className="button btn-solid button-primary"
              onClick={saveAddressHandler}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
