import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ContextProvider } from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ContextProvider>
  </React.StrictMode>
);
