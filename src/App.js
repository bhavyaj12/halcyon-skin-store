import { Routes } from "./routes";
import { Footer, NavigationTop } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App page-container">
      <NavigationTop />
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
