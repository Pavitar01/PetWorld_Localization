import UseEffects from "@components/UseEffects";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/Store";
import Index from "./WeatherApp/Index";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <UseEffects />
      <Index />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
