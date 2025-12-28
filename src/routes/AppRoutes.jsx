import React from "react";
import { Route, Routes } from "react-router";

import AdmitCard from "../pages/AdmitCard";
import AdmitCardLayout from "../layouts/AdmitCardLayout";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Marksheet from "../pages/Marksheet";
import MarksheetSheet from "../components/marksheet/MarksheetSheet";
import Rough from "../components/marksheet/Rough";
import MarksheetLayout from "../components/marksheet/MarksheetLayout";
import ReportCard from "../pages/ReportCard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route element={<AdmitCardLayout />}>
        <Route path="/admit-card" element={<AdmitCard />} />
      </Route>
      <Route element={<MarksheetLayout />}>
        <Route path="/marksheet" element={<Marksheet />} />
        <Route path="/rough" element={<Rough />} />
        <Route path="report-card" element={<ReportCard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
