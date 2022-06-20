import { useState } from "react";
import { useCart } from "../../contexts";

const Coupons = () => {
  const {
    cartState: { coupons, selectedCoupon },
    cartDispatch,
  } = useCart();
  const [showCoupons, setShowCoupons] = useState(false);
  const [selectCoupon, setSelectCoupon] = useState(selectedCoupon?._id ?? "");

  const changeCouponHandler = (e) => {
    setSelectCoupon(e.target.value);
  };

  const applyCouponHandler = () => {
    console.log(selectCoupon);
    cartDispatch({ type: "SET_SELECTED_COUPON", payload: selectCoupon });
    setShowCoupons(false);
  };

  const clearCouponHandler = () => {
    setSelectCoupon("");
    cartDispatch({ type: "CLEAR_SELECTED_COUPON" });
    setShowCoupons(false);
  };

  return (
    <>
      <div className="coupon-toggle">
        <button
          className="button btn-outline button-secondary show-coupons"
          onClick={() => setShowCoupons(!showCoupons)}
        >
          Coupons Available!
        </button>
        {showCoupons && (
          <div className="coupons-list">
            {coupons?.map((item) => (
              <label className="p-1" key={item._id} htmlFor={item._id}>
                <input
                  type="radio"
                  name="coupon-select"
                  id={item._id}
                  value={item._id}
                  onChange={changeCouponHandler}
                  checked={item._id === selectCoupon}
                  className="m-1 p-1"
                ></input>
                {item.couponCode} - {item.couponDescription}
              </label>
            ))}
            <button
              className="button btn-solid button-secondary"
              onClick={applyCouponHandler}
            >
              Apply
            </button>
            <button
              className="button btn-outline button-secondary"
              onClick={clearCouponHandler}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Coupons;
