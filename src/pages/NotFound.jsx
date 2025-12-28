import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200 px-4">
      <div className="max-w-md text-center">
        <h1 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl font-extrabold tracking-tight text-transparent">
          404
        </h1>

        <p className="mt-4 text-xl font-semibold text-slate-800">
          Page not found
        </p>

        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
