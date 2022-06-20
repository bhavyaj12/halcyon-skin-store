import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategories } from "../../utilities";
import { useProduct } from "../../contexts";
import { useToast } from "../../custom-hooks";
import heroImg from "../../assets/images/LandingPage/hero-img.png";
import "./landing.css";

const LandingPage = () => {
  const { showToast } = useToast();
  const { dispatch } = useProduct();
  const [categoriesList, setCategoriesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await fetchCategories();
        setCategoriesList(categories);
      } catch (error) {
        showToast("error", "Can't fetch categories, please try again later.");
      }
    })();
  }, []);

  const selectCategoryHandler = (categoryName) => {
    dispatch({ type: "CLEAR" });
    dispatch({ type: categoryName.toUpperCase() });
    navigate("/products");
  };

  return (
    <div>
      <section className="flex-col">
        <Link to="/products">
          <img
            src={heroImg}
            alt="Hero Skincare Header"
            className="hero-img img-responsive"
          />
        </Link>
        <article className="home-intro container-center flex-col">
          <p className="h4">Skincare simplified!</p>
          <p className="txt-normal">
            Inspired by the world's best skincare-making processes, Halcyon Skin
            Store focuses on curating the best of Indian beauty. We only carry
            products that combine powerful ingredients backed by years of
            research &amp; testing. Build a consistent self-care routine for
            your skin type and preferences from the wide range of products we
            offer.
          </p>
        </article>
      </section>

      <main className="home-main">
        <section>
          <p className="h3 text-center">Featured Categories</p>

          <div className="categories-container mt-7">
            {!categoriesList
              ? null
              : categoriesList.map((category) => {
                  return (
                    <div
                      key={category._id}
                      className="link-no-decor router-link"
                      onClick={() =>
                        selectCategoryHandler(category.categoryName)
                      }
                    >
                      <div className="card card-vertical ecomm-card card-shadow p-3">
                        <div className="img-badge-container">
                          <img
                            src={category.featCardImg}
                            alt="sunscreen sample"
                            className="img-responsive vt-card-img"
                          />
                        </div>
                        <div className="vt-card-text">
                          <p className="ecomm-card-heading">
                            {category.categoryName}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
