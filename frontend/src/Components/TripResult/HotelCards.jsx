import React from "react";
import {
  FaHotel,
  FaMapMarkerAlt,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

const HotelCards = ({ hotels }) => {
  if (!hotels || hotels.length === 0) return null;

  const openGoogleMaps = (hotel) => {
    const query = encodeURIComponent(`${hotel.name}, ${hotel.location}`);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  const bookHotel = (hotel) => {
    const query = encodeURIComponent(`${hotel.name} ${hotel.location}`);
    window.open(
      `https://www.booking.com/searchresults.html?ss=${query}`,
      "_blank"
    );
  };

  return (
    <section
      id="hotels"
      className="max-w-7xl mx-auto px-6 py-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        🏨 Recommended Hotels
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FaHotel className="text-blue-600" />
              {hotel.name}
            </h3>

            <p className="mt-3 flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="text-red-500" />
              {hotel.location}
            </p>

            <p className="mt-2 flex items-center gap-2 text-yellow-500">
              <FaStar />
              {hotel.rating}
            </p>

            <p className="mt-2 flex items-center gap-2 text-green-600 font-semibold">
              <FaMoneyBillWave />
              {hotel.pricePerNight}
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {hotel.description}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => openGoogleMaps(hotel)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                📍 View on Maps
              </button>

              <button
                onClick={() => bookHotel(hotel)}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                🛏️ Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelCards;