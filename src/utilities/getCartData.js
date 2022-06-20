const getCartData = (currentCart) => {
  const itemsPrice = currentCart.cart.reduce(
    (acc, curr) => acc + Number(curr.originalPrice) * Number(curr.qty),
    0
  );
  const numItems = currentCart.cart.reduce(
    (acc, curr) => acc + Number(curr.qty),
    0
  );
  const checkoutDiscount = currentCart.cart.reduce(
    (acc, curr) =>
      acc + Number(curr.originalPrice - curr.discountPrice) * Number(curr.qty),
    0
  );
  let couponDiscount = 0;
  let grandTotal = itemsPrice - checkoutDiscount;
  const isCouponApplied = currentCart.selectedCoupon ? true : false;
  if (isCouponApplied) {
    couponDiscount = (
      0.01 *
      currentCart.selectedCoupon.coupon *
      grandTotal
    ).toFixed(2);
    grandTotal = (grandTotal - couponDiscount).toFixed(2);
  }

  return { itemsPrice, numItems, checkoutDiscount, grandTotal, couponDiscount };
};

export { getCartData };
