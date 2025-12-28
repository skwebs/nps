import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return <AppRoutes />;
};

export default App;
