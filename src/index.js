import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider, WishlistProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
