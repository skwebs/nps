import React from "react";
import { Outlet } from "react-router";
import "../paper2.css";
const AdmitCardLayout = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center py-4">
      <Outlet />
    </div>
  );
};

export default AdmitCardLayout;
