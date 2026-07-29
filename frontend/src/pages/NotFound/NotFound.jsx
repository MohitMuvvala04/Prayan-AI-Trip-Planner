import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 px-6">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-transparent dark:border-gray-700 transition-colors duration-300">

        <FaExclamationTriangle className="text-7xl text-red-500 mx-auto mb-6" />

        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          Oops! The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          <FaHome />
          Go to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;