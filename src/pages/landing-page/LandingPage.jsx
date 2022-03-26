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

      <section class="flex-col">
        <a href="/Product List/product.html">
          <img
            src={heroImg}
            alt="Hero Skincare Header"
            class="hero-img img-responsive"
          />
        </a>
        <article class="home-intro container-center flex-col">
          <p class="h4">Skincare simplified!</p>
          <p class="txt-normal">
            Inspired by the world's best skincare-making processes, Halcyon Skin
            Store focuses on curating the best of Indian beauty. We only carry
            products that combine powerful ingredients backed by years of
            research & testing. Build a consistent self-care routine for your
            skin type and preferences from the wide range of products we offer.
          </p>
        </article>
      </section>

      <main class="home-main">
        <section>
          <p class="h3 text-center">Featured Categories</p>
          <div class="categories-container mt-7">
            <div class="card card-vertical ecomm-card card-shadow p-3">
              <div class="img-badge-container">
                <img
                  src={featCardImg1}
                  alt="sunscreen sample"
                  class="img-responsive vt-card-img"
                />
              </div>
              <div class="vt-card-text">
                <p class="ecomm-card-heading">Sunscreen</p>
              </div>
            </div>

            <div class="card card-vertical ecomm-card card-shadow p-3">
              <div class="img-badge-container">
                <img
                  src={featCardImg2}
                  alt="serum sample"
                  class="img-responsive vt-card-img"
                />
              </div>
              <div class="vt-card-text">
                <p class="ecomm-card-heading">Serums</p>
              </div>
            </div>

            <div class="card card-vertical ecomm-card card-shadow p-3">
              <div class="img-badge-container">
                <img
                  src={featCardImg3}
                  alt="moisturizer sample"
                  class="img-responsive vt-card-img"
                />
              </div>
              <div class="vt-card-text">
                <p class="ecomm-card-heading">Moisturizers</p>
              </div>
            </div>

            <div class="card card-vertical ecomm-card card-shadow p-3">
              <div class="img-badge-container">
                <img
                  src={featCardImg4}
                  alt="cleanser sample"
                  class="img-responsive vt-card-img"
                />
              </div>
              <div class="vt-card-text">
                <p class="ecomm-card-heading">Cleanser</p>
              </div>
            </div>

            <div class="card card-vertical ecomm-card card-shadow p-3">
              <div class="img-badge-container">
                <img
                  src={featCardImg5}
                  alt="bodycare sample"
                  class="img-responsive vt-card-img"
                />
              </div>
              <div class="vt-card-text">
                <p class="ecomm-card-heading my-1">Bodycare</p>
              </div>
            </div>
          </div>
        </section>
        <a href="#" class="button button-floating">
          <i class="fas fa-arrow-up"></i>
        </a>
      </main>

      <Footer />
    </div>
  );
}
