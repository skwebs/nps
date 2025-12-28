import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
