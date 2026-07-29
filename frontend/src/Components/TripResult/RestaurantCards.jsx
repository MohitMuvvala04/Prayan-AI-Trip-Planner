import React from "react";
import {
  FaUtensils,
  FaMapMarkerAlt,
  FaHamburger,
  FaMoneyBillWave,
} from "react-icons/fa";

const RestaurantCards = ({ restaurants }) => {
  if (!restaurants || restaurants.length === 0) return null;

  const openGoogleMaps = (restaurant) => {
    const query = encodeURIComponent(restaurant.name);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <section
      id="restaurants"
      className="max-w-7xl mx-auto px-6 py-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        🍽️ Recommended Restaurants
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FaUtensils className="text-orange-500" />
              {restaurant.name}
            </h3>

            <p className="mt-3 flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaHamburger className="text-red-500" />
              {restaurant.cuisine}
            </p>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <strong>Must Try:</strong> {restaurant.mustTry}
            </p>

            <p className="mt-2 flex items-center gap-2 text-green-600 font-semibold">
              <FaMoneyBillWave />
              {restaurant.priceRange}
            </p>

            <button
              onClick={() => openGoogleMaps(restaurant)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaMapMarkerAlt />
              View on Google Maps
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantCards;