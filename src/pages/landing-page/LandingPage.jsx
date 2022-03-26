import "./landing.css";
import heroImg from "../../assets/images/LandingPage/hero-img.png";
import featCardImg1 from "../../assets/images/LandingPage/feat-cat-sun.jpg";
import featCardImg2 from "../../assets/images/LandingPage/feat-cat-serum.jpg";
import featCardImg3 from "../../assets/images/LandingPage/feat-cat-moist.jpg";
import featCardImg4 from "../../assets/images/LandingPage/feat-cat-clean.png";
import featCardImg5 from "../../assets/images/LandingPage/feat-cat-body.jpg";
import { Footer, NavigationTop } from "../../components";

export default function LandingPage() {
  return (
    <div>
      <NavigationTop />

      <section className="flex-col">
        <a href="/Product List/product.html">
          <img
            src={heroImg}
            alt="Hero Skincare Header"
            className="hero-img img-responsive"
          />
        </a>
        <article className="home-intro container-center flex-col">
          <p className="h4">Skincare simplified!</p>
          <p className="txt-normal">
            Inspired by the world's best skincare-making processes, Halcyon Skin
            Store focuses on curating the best of Indian beauty. We only carry
            products that combine powerful ingredients backed by years of
            research & testing. Build a consistent self-care routine for your
            skin type and preferences from the wide range of products we offer.
          </p>
        </article>
      </section>

      <main className="home-main">
        <section>
          <p className="h3 text-center">Featured Categories</p>
          <div className="categories-container mt-7">
            <div className="card card-vertical ecomm-card card-shadow p-3">
              <div className="img-badge-container">
                <img
                  src={featCardImg1}
                  alt="sunscreen sample"
                  className="img-responsive vt-card-img"
                />
              </div>
              <div className="vt-card-text">
                <p className="ecomm-card-heading">Sunscreen</p>
              </div>
            </div>

            <div className="card card-vertical ecomm-card card-shadow p-3">
              <div className="img-badge-container">
                <img
                  src={featCardImg2}
                  alt="serum sample"
                  className="img-responsive vt-card-img"
                />
              </div>
              <div className="vt-card-text">
                <p className="ecomm-card-heading">Serums</p>
              </div>
            </div>

            <div className="card card-vertical ecomm-card card-shadow p-3">
              <div className="img-badge-container">
                <img
                  src={featCardImg3}
                  alt="moisturizer sample"
                  className="img-responsive vt-card-img"
                />
              </div>
              <div className="vt-card-text">
                <p className="ecomm-card-heading">Moisturizers</p>
              </div>
            </div>

            <div className="card card-vertical ecomm-card card-shadow p-3">
              <div className="img-badge-container">
                <img
                  src={featCardImg4}
                  alt="cleanser sample"
                  className="img-responsive vt-card-img"
                />
              </div>
              <div className="vt-card-text">
                <p className="ecomm-card-heading">Cleanser</p>
              </div>
            </div>

            <div className="card card-vertical ecomm-card card-shadow p-3">
              <div className="img-badge-container">
                <img
                  src={featCardImg5}
                  alt="bodycare sample"
                  className="img-responsive vt-card-img"
                />
              </div>
              <div className="vt-card-text">
                <p className="ecomm-card-heading my-1">Bodycare</p>
              </div>
            </div>
          </div>
        </section>
        <a href="#" className="button button-floating">
          <i className="fas fa-arrow-up"></i>
        </a>
      </main>

      <Footer />
    </div>
  );
}
