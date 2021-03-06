import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes } from "./routes";
import { Footer, NavigationTop, Toast } from "./components";

import "./App.css";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <div className="App page-container">
        <NavigationTop />
        <Toast />
        <Routes />
        <button
          className="button button-floating btn-no-decor"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
