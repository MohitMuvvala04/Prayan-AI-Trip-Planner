import {
  FaCalendarDay,
  FaSun,
  FaCloudSun,
  FaMoon,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

function DayCard({ aiTrip }) {
  const openGoogleMaps = (place) => {
    const query = encodeURIComponent(place);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  if (!aiTrip || !aiTrip.itinerary) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl p-6 shadow text-gray-900 dark:text-white transition-colors duration-300">
        No itinerary available.
      </div>
    );
  }

  return (
    <div id="itinerary" className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        <FaCalendarDay className="text-blue-600" />
        AI Generated Itinerary
      </h2>

      <div className="space-y-8">
        {aiTrip.itinerary.map((day) => (
          <div
            key={day.day}
            className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-3xl shadow-xl p-8 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
              📅 Day {day.day}
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {day.title}
            </h3>

            {/* Morning */}
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-lg font-bold text-yellow-600 mb-3">
                <FaSun />
                Morning
              </h4>

              <ul className="space-y-2">
                {day.morning.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <div className="flex gap-2 text-gray-800 dark:text-gray-200">
                      <FaCheckCircle className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </div>

                    <button
                      onClick={() => openGoogleMaps(item)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Maps
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Afternoon */}
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-lg font-bold text-orange-500 mb-3">
                <FaCloudSun />
                Afternoon
              </h4>

              <ul className="space-y-2">
                {day.afternoon.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <div className="flex gap-2 text-gray-800 dark:text-gray-200">
                      <FaCheckCircle className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </div>

                    <button
                      onClick={() => openGoogleMaps(item)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Maps
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening */}
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-lg font-bold text-pink-500 mb-3">
                🌇 Evening
              </h4>

              <ul className="space-y-2">
                {day.evening.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <div className="flex gap-2 text-gray-800 dark:text-gray-200">
                      <FaCheckCircle className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </div>

                    <button
                      onClick={() => openGoogleMaps(item)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Maps
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Night */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-indigo-600 mb-3">
                <FaMoon />
                Night
              </h4>

              <ul className="space-y-2">
                {day.night.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <div className="flex gap-2 text-gray-800 dark:text-gray-200">
                      <FaCheckCircle className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </div>

                    <button
                      onClick={() => openGoogleMaps(item)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Maps
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayCard;