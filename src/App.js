import { Routes } from "./routes";
import { Footer, NavigationTop } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App page-container">
      <NavigationTop />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
