import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
