import {
  FaTint,
  FaCar,
  FaUtensils,
  FaSun,
  FaMapMarkedAlt,
} from "react-icons/fa";

function TravelTips() {
  const tips = [
    {
      icon: <FaTint />,
      title: "Stay Hydrated",
      text: "Carry enough drinking water during your trip.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: <FaSun />,
      title: "Weather",
      text: "Wear light cotton clothes and sunscreen.",
      color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
    {
      icon: <FaUtensils />,
      title: "Food",
      text: "Taste local cuisine but eat at hygienic restaurants.",
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    },
    {
      icon: <FaCar />,
      title: "Drive Safe",
      text: "Follow traffic rules and avoid late-night driving.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Navigation",
      text: "Keep Google Maps downloaded for offline use.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
  ];

  return (
    <div id="tips" className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        💡 Travel Tips
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-300"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 ${tip.color}`}
            >
              {tip.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {tip.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {tip.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelTips;