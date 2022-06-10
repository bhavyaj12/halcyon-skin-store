import { v4 as uuid } from "uuid";
import featCardImg1 from "../../assets/images/LandingPage/feat-cat-sun.jpg";
import featCardImg2 from "../../assets/images/LandingPage/feat-cat-serum.jpg";
import featCardImg3 from "../../assets/images/LandingPage/feat-cat-moist.jpg";
import featCardImg4 from "../../assets/images/LandingPage/feat-cat-clean.png";
import featCardImg5 from "../../assets/images/LandingPage/feat-cat-body.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sunscreen",
    description: "Protect your skin from UVA/UVB rays!",
    featCardImg: featCardImg1,
  },
  {
    _id: uuid(),
    categoryName: "Serums",
    description: "Deal with specific issues like spots, dull skin.",
    featCardImg: featCardImg2,
  },
  {
    _id: uuid(),
    categoryName: "Moisturizers",
    description: "Nourish and smoothen skin.",
    featCardImg: featCardImg3,
  },
  {
    _id: uuid(),
    categoryName: "Cleanser",
    description: "Clean and brighten!",
    featCardImg: featCardImg4,
  },
  {
    _id: uuid(),
    categoryName: "Bodycare",
    description: "Take care of your body skin.",
    featCardImg: featCardImg5,
  },
];
