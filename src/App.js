import { Routes } from "./routes";
import { Footer, NavigationTop } from "./components";

function App() {
  return (
    <div className="App">
      <NavigationTop />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
