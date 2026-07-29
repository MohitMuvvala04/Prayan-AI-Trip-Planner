import React from "react";
import {
  FaTemperatureHigh,
  FaCloudSun,
  FaTint,
  FaWind,
} from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  if (!weather || Object.keys(weather).length === 0) {
    return null;
  }

  return (
    <section
      id="weather"
      className="max-w-7xl mx-auto px-6 py-10 mb-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        🌤️ Current Weather
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
          <FaTemperatureHigh className="text-red-500 text-3xl mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white">
            Temperature
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {weather.temperature} °C
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
          <FaCloudSun className="text-yellow-500 text-3xl mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white">
            Condition
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {weather.condition}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
          <FaTint className="text-blue-500 text-3xl mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white">
            Humidity
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {weather.humidity}%
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
          <FaWind className="text-green-500 text-3xl mx-auto mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white">
            Wind Speed
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {weather.windSpeed} m/s
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;