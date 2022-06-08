import { image404 } from "../../assets";
import "./invalid-page.css";

const InvalidPage = () => {
  return (
    <div className="image-404-container my-6 p-4 flex-col">
      <div className="alert alert-container alert-error">Page Not Found</div>
      <img alt="404 image" src={image404} className="error-404-img" />
    </div>
  );
};

export default InvalidPage;
