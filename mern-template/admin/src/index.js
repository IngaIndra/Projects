import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { AxiosWrapper } from "./utils/AxiosWrapper";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AxiosWrapper>
      <CurrentUserProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </CurrentUserProvider>
    </AxiosWrapper>
  </BrowserRouter>
);
