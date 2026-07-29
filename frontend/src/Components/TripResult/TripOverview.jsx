import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWallet,
  FaUsers,
  FaChild,
  FaHotel,
  FaCar,
  FaUtensils,
  FaSuitcaseRolling,
} from "react-icons/fa";

function TripOverview({ tripData }) {
  const details = [
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
      title: "Destination",
      value: tripData.destination,
    },
    {
      icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
      title: "Duration",
      value: `${tripData.days} Days`,
    },
    {
      icon: <FaWallet className="text-green-500 text-2xl" />,
      title: "Budget",
      value: `₹${tripData.budget}`,
    },
    {
      icon: <FaUsers className="text-indigo-500 text-2xl" />,
      title: "Adults",
      value: tripData.adults,
    },
    {
      icon: <FaChild className="text-pink-500 text-2xl" />,
      title: "Children",
      value: tripData.children,
    },
    {
      icon: <FaSuitcaseRolling className="text-orange-500 text-2xl" />,
      title: "Travel Style",
      value: tripData.travelStyle,
    },
    {
      icon: <FaHotel className="text-purple-500 text-2xl" />,
      title: "Hotel",
      value: tripData.hotelCategory,
    },
    {
      icon: <FaCar className="text-cyan-500 text-2xl" />,
      title: "Transport",
      value: tripData.transport,
    },
    {
      icon: <FaUtensils className="text-yellow-500 text-2xl" />,
      title: "Meal",
      value: tripData.meal,
    },
  ];

  return (
    <div id="overview" className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        📋 Trip Overview
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4"
          >
            {item.icon}

            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripOverview;