function QuickNavigation() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const buttons = [
    { id: "overview", label: "📍 Trip Overview" },
    { id: "itinerary", label: "📅 Itinerary" },
    { id: "weather", label: "🌤 Weather" },
    { id: "hotels", label: "🏨 Hotels" },
    { id: "restaurants", label: "🍽 Restaurants" },
    { id: "budget", label: "💰 Budget" },
    { id: "tips", label: "💡 Travel Tips" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent dark:border-gray-700 p-6 mb-10 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        🚀 Quick Navigation
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-colors duration-300"
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickNavigation;