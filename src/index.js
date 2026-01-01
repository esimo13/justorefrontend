import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Production: Vercel cannot use CRA "proxy". Point API calls to Render via REACT_APP_API_URL.
// Example: REACT_APP_API_URL=https://your-backend.onrender.com
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
// Auth in this app is cookie-based; cross-site requires backend CORS+cookies configured.
axios.defaults.withCredentials = true;

// Dev-only: ignore uncaught errors coming from browser extensions (e.g. MetaMask).
// CRA's error overlay will otherwise show a full-screen runtime error for issues that
// are not caused by this app.
if (process.env.NODE_ENV === "development") {
  const isExtensionError = (message, filename) => {
    const msg = String(message || "");
    const file = String(filename || "");
    return (
      file.startsWith("chrome-extension://") ||
      file.startsWith("moz-extension://") ||
      msg.toLowerCase().includes("failed to connect to metamask")
    );
  };

  window.addEventListener(
    "error",
    (event) => {
      if (isExtensionError(event?.message, event?.filename)) {
        event.preventDefault();
        event.stopImmediatePropagation?.();
      }
    },
    true // capture
  );

  window.addEventListener(
    "unhandledrejection",
    (event) => {
      const reasonMsg =
        typeof event?.reason === "string"
          ? event.reason
          : event?.reason?.message;

      if (isExtensionError(reasonMsg, "")) {
        event.preventDefault();
        event.stopImmediatePropagation?.();
      }
    },
    true // capture
  );
}

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
