import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { initTheme } from "./assets/js/theme";
import App from "./App";

// initialize theme early so the correct data-theme is present before React mounts
initTheme();
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/didactic-potato/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
