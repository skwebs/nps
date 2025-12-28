import { Outlet } from "react-router";

export default function MarksheetLayout() {
  return (
    <div className="body A4 bg-gray-200 min-h-screen flex justify-center py-4">
      <Outlet />
    </div>
  );
}
