import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "../src/chakra/theme.ts";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
