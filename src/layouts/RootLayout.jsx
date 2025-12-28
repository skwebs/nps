import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-tr from-indigo-200 via-purple-200 to-pink-200">
      <header className=" sticky top-0 bg-linear-to-l from-indigo-500 via-purple-500 to-pink-500 md:px-5">
        <NavBar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
