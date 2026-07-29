import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaTrash, FaEye } from "react-icons/fa";
import { getSavedTrips, deleteTrip } from "../../utils/tripStorage";
import { useState } from "react";

function TripHistory() {
  const [trips, setTrips] = useState(getSavedTrips());

  const handleDelete = (id) => {
    deleteTrip(id);
    setTrips(getSavedTrips());
  };

  if (trips.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
          No Saved Trips Yet ✈️
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 py-10 px-5">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          📚 Trip History
        </h1>

        <div className="space-y-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-transparent dark:border-gray-700 p-6 flex flex-col md:flex-row md:items-center md:justify-between transition-colors duration-300"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {trip.destination}
                </h2>

                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  📅 {trip.days} Days
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  💰 ₹{trip.budget}
                </p>

                <p className="text-gray-500 dark:text-gray-400">
                  Saved: {trip.createdAt}
                </p>
              </div>

              <div className="flex gap-4 mt-5 md:mt-0">
                <Link
                  to="/results"
                  state={{
                    tripData: trip.tripData,
                    aiTrip: trip.aiTrip,
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-colors"
                >
                  <FaEye />
                  View
                </Link>

                <button
                  onClick={() => handleDelete(trip.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-colors"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TripHistory;