import {
  FaRobot,
  FaMapMarkedAlt,
  FaCloudSun,
  FaHotel,
  FaUtensils,
  FaMoneyBillWave,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-600" />,
      title: "AI Trip Planner",
      description:
        "Generate personalized travel itineraries based on your destination, budget, and travel style.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-green-600" />,
      title: "Google Maps",
      description:
        "Open attractions, hotels, and restaurants directly in Google Maps.",
    },
    {
      icon: <FaCloudSun className="text-4xl text-yellow-500" />,
      title: "Live Weather",
      description:
        "Get the latest weather information for your travel destination.",
    },
    {
      icon: <FaHotel className="text-4xl text-purple-600" />,
      title: "Hotel Suggestions",
      description:
        "Receive AI-recommended hotels based on your preferences and budget.",
    },
    {
      icon: <FaUtensils className="text-4xl text-red-500" />,
      title: "Restaurant Recommendations",
      description:
        "Discover popular restaurants and local cuisines to try during your trip.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-emerald-600" />,
      title: "Budget Planning",
      description:
        "View a detailed budget breakdown including hotel, food, transport, and activities.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          ✨ Why Choose Prayan AI?
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Plan smarter with AI-powered recommendations, weather updates,
          budget planning, hotel suggestions, restaurant recommendations,
          and interactive maps—all in one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-transparent dark:border-gray-700"
            >
              <div className="mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;