const filteredCatProducts = (
  product,
  Sunscreen,
  Serums,
  Moisturizers,
  Cleanser,
  Bodycare
) => {
  const catergoryFiltered = [];

  if (
    Sunscreen === false &&
    Serums === false &&
    Moisturizers === false &&
    Cleanser === false &&
    Bodycare === false
  )
    return product;

  if (Sunscreen) {
    let newProductsList = product.filter(
      (item) => "Sunscreen" === item.categoryName
    );
    catergoryFiltered.push(...newProductsList);
  }
  if (Serums) {
    let newProductsList = product.filter(
      (item) => "Serums" === item.categoryName
    );
    catergoryFiltered.push(...newProductsList);
  }
  if (Moisturizers) {
    let newProductsList = product.filter(
      (item) => "Moisturizers" === item.categoryName
    );
    catergoryFiltered.push(...newProductsList);
  }
  if (Cleanser) {
    let newProductsList = product.filter(
      (item) => "Cleanser" === item.categoryName
    );
    catergoryFiltered.push(...newProductsList);
  }
  if (Bodycare) {
    let newProductsList = product.filter(
      (item) => "Bodycare" === item.categoryName
    );
    catergoryFiltered.push(...newProductsList);
  }
  return catergoryFiltered;
};

const filteredPriceProducts = (product, price) => {
  return product.filter((item) => item.discountPrice <= price);
};

const filteredRatingProducts = (product, rating) => {
  return product.filter((item) => item.rating >= rating);
};

const sortedProducts = (product, sortBy) => {
  if (sortBy === "PRICE_LOW_TO_HIGH")
    return [...product].sort((a, b) => a.discountPrice - b.discountPrice);
  else if (sortBy === "PRICE_HIGH_TO_LOW")
    return [...product].sort((a, b) => b.discountPrice - a.discountPrice);
  else if (sortBy === "RATING_HIGH_TO_LOW")
    return [...product].sort((a, b) => b.rating - a.rating);

  return product;
};

export {
  filteredCatProducts,
  filteredPriceProducts,
  filteredRatingProducts,
  sortedProducts,
};
