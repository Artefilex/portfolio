import React from "react";
import ReactDOM from "react-dom/client";
import "./assests/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./Reducer/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
           <App />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
