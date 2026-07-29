import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

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
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            🌍 Prayan AI
          </h1>

          <h2 className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
            Plan Smarter. Travel Better.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Create personalized travel itineraries with AI.
            Discover hotels, transport, budgets,
            and day-wise travel plans within seconds.
          </p>

          <button
            onClick={goToTripPlanner}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition"
          >
            Plan My Trip
          </button>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-80 h-80 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-8xl shadow-2xl transition-colors duration-300">
            ✈️
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;