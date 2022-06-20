import { useNavigate } from "react-router-dom";
import { useAuth, useAddress } from "../../contexts";
import { removeAddress } from "../../utilities";
import "./address-card.css";

const AddressCard = ({ address }) => {
  const {
    auth: { token },
  } = useAuth();
  const {
    addressState: { selectedAddress },
    addressDispatch,
  } = useAddress();
  const navigate = useNavigate();

  const deleteAddressHandler = async (e, id) => {
    e.preventDefault();
    await removeAddress(id, token, addressDispatch);
    if (id === selectedAddress?._id) {
      addressDispatch({
        type: "UPDATE_SELECTED_ADDRESS",
      });
    }
  };

  const editAddressHandler = (e) => {
    e.preventDefault();
    addressDispatch({
      type: "SET_EDIT_ADDRESS",
      payload: address._id,
    });
    addressDispatch({
      type: "SHOW_MODAL",
      payload: true,
    });
  };

  const checkSelectedAddr = selectedAddress?._id === address._id;

  const selectAddressHandler = (e, address) => {
    e.preventDefault();
    addressDispatch({
      type: "SELECT_ADDRESS",
      payload: address,
    });
  };

  return (
    <div className="card card-hz address-card" id={address._id}>
      <div className="hz-card-text">
        <h5 className="h5">{address.name}</h5>
        <p className="my-2">{address.street}</p>
        <p className="my-2">{address.city}</p>
        <p className="my-2">{address.state}</p>
        <p className="my-2">{address.zipCode}</p>
        <p className="my-2">{address.mobile}</p>
      </div>
      <div className="card-hz-btn flex-row">
        <button
          className="button btn-solid button-primary"
          onClick={(e) => editAddressHandler(e)}
        >
          <span>Edit</span>
        </button>
        <button
          className="button btn-outline button-secondary"
          onClick={(e) => deleteAddressHandler(e, address._id)}
        >
          <span>Delete</span>
        </button>
      </div>
      {checkSelectedAddr ? (
        <button
          className="button btn-solid button-secondary"
          onClick={() => navigate("/cart")}
        >
          <span>Checkout with Selected Address</span>
        </button>
      ) : (
        <button
          className="button btn-outline button-secondary"
          onClick={(e) => selectAddressHandler(e, address)}
        >
          <span>Deliver to this Address</span>
        </button>
      )}
    </div>
  );
};

export default AddressCard;
