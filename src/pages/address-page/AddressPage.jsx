import { AddressCard, AddressModal } from "../../components";
import { useAddress } from "../../contexts";

const AddressPage = () => {
  const {
    addressState: { addresses, showAddressModal },
    addressDispatch,
  } = useAddress();

  return (
    <main className="cart-main-container">
      <div className="cart-heading container-center my-8">
        <h2 className="h2">My Addresses</h2>
      </div>
      <div className="add-address">
        <button
          className="button btn-solid button-primary"
          onClick={() =>
            addressDispatch({
              type: "SHOW_MODAL",
              payload: !showAddressModal,
            })
          }
        >
          Add Address
        </button>
      </div>
      <section className="cart-cards-container address-container">
        {addresses.length > 0 ? (
          addresses.map((item) => {
            return <AddressCard address={item} key={item._id} />;
          })
        ) : (
          <div className="no-address">
            <p className="alert-container alert-error txt-medium">
              No Addresses Found
            </p>
          </div>
        )}
      </section>
      {showAddressModal && <AddressModal />}
    </main>
  );
};

export default AddressPage;
