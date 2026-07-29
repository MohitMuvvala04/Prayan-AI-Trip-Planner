import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  const goToFeatures = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("features");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const goToTripPlanner = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("trip-planner");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
        >
          🌍 Prayan AI
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <button
              onClick={goToFeatures}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Features
            </button>
          </li>

          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              About
            </NavLink>
          </li>

        </ul>

        {/* Plan Trip Button */}
        <div className="flex items-center gap-4">

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="text-2xl hover:scale-110 transition"
    title="Toggle Theme"
  >
    {darkMode ? "☀️" : "🌙"}
  </button>

  <button
    onClick={goToTripPlanner}
    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Plan Trip
  </button>

</div>

      </div>
    </nav>
  );
}

export default Navbar;