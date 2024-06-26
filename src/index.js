import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("%cJust Read the Instructions", "font-size: 20px; color: red;");

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
      <Toaster />
    </Provider>
  // </React.StrictMode>
);
