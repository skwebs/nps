import { NavLink } from "react-router";

export default function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-white underline underline-offset-4 " : "text-white ";

  return (
    <>
      <div className="  mx-auto flex h-14 items-center justify-between px-4 ">
        <h2 className="text-lg font-bold md:flex hidden text-white">
          NATIONAL PUBLIC SCHOOL
        </h2>
        <h2 className="text-lg font-bold md:hidden text-white">NPS</h2>

        <nav className="flex gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </>
  );
}
