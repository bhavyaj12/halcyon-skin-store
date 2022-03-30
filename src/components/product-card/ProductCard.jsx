export default function ProductCard ({
  name,
  brand,
  rating,
  reviews,
  discountPrice,
  originalPrice,
  discountRate,
  tag,
  inStock,
  coverImg,
  categoryName,
}) {
  const discountValid = discountRate === 0 ? false : true;
  if (!inStock) {
    return (
      <div className="card card-vertical card-shadow pos-relative">
        <div className="overlay-container">
          <div className="p-3 img-badge-container">
            {tag && <span className="vt-card-badge txt-small p-3">{tag}</span>}
            <img
              src={coverImg}
              alt="Purple Soap"
              className="img-responsive vt-card-img"
            />
          </div>
          <div className="vt-card-text p-3">
            <span className="product-name">{name}</span>
            <p className="card-brand-name my-4">{brand}</p>
            <span className="rating d-inline">
              {rating} <i className="fas fa-star"></i>
              <span className="text-small"> | ({reviews} reviews)</span>
            </span>
            <div className="pt-3 card-price">
              <span className="d-inline txt-bold">₹ {discountPrice}</span>
              {discountValid && (
                <span className="txt-small ml-2 d-inline">
                  <strike>₹ {originalPrice}</strike>
                </span>
              )}
              {discountValid && (
                <span className="discount ml-2 txt-small txt-bold">
                  ( {discountRate}% OFF )
                </span>
              )}
              <span className="alert-container alert-primary txt-small category-tag">
                {categoryName}
              </span>
            </div>
            <div className="card-vt-btn mt-5 ">
              <a href="#" className="button button-primary button-text-icon ">
                <span>
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </span>
              </a>
              <a href="#" className="button btn-outline button-secondary ">
                <span>
                  <i className="far fa-heart"></i>
                </span>
              </a>
            </div>
          </div>
          <span className="text-overlay txt-medium p-5">Out of Stock</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-vertical card-shadow ">
      <div className=" p-3 img-badge-container">
        {tag && <span className="vt-card-badge txt-small p-3">{tag}</span>}
        <img
          src={coverImg}
          alt="Purple Soap"
          className="img-responsive vt-card-img"
        />
      </div>
      <div className="vt-card-text p-3">
        <span className="product-name">{name}</span>
        <p className="card-brand-name my-4">{brand}</p>
        <span className="rating d-inline">
          {rating} <i className="fas fa-star"></i>
          <span className="text-small"> | ({reviews} reviews)</span>
        </span>
        <div className="pt-3 card-price">
          <span className="d-inline txt-bold">₹ {discountPrice}</span>
          {discountValid && (
            <span className="txt-small ml-2 d-inline">
              <strike>₹ {originalPrice}</strike>
            </span>
          )}
          {discountValid && (
            <span className="discount ml-2 txt-small txt-bold">
              ( {discountRate}% OFF )
            </span>
          )}
          <span className="alert-container alert-primary txt-small category-tag">
            {categoryName}
          </span>
        </div>
        <div className="card-vt-btn mt-5 ">
          <a href="#" className="button button-primary button-text-icon ">
            <span>
              <i className="fas fa-shopping-cart"></i>
              Add to Cart
            </span>
          </a>
          <a href="#" className="button btn-outline button-secondary ">
            <span>
              <i className="far fa-heart"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}