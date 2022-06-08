import { Routes } from "./routes";
import { Footer, NavigationTop, Toast } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App page-container">
      <NavigationTop />
      <Toast />
      <Routes />
      <button
        className="button button-floating"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      <Footer />
    </div>
  );
}

export default App;
