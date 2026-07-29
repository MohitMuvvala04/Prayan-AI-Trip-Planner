import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaWallet,
  FaUsers,
  FaCar,
  FaHotel,
} from "react-icons/fa";

function Header({ tripData, aiTrip }) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8">

      {/* Background Image */}
      <img
        src={aiTrip?.destinationImage || "/travel-banner.jpg"}
        alt={tripData.destination}
        className="w-full h-[420px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/75 transition-colors duration-300"></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">

        {/* Top Section */}
        <div>
          <span className="inline-block bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            ✨ AI Generated Travel Plan
          </span>

          <h1 className="text-5xl font-extrabold mt-5 drop-shadow-lg">
            {tripData.destination}
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Discover a personalized travel itinerary created by AI with
            attractions, hotels, restaurants, travel tips, and estimated
            expenses for your journey.
          </p>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaCalendarAlt className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Duration</p>
            <h2 className="font-bold">{tripData.days} Days</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaWallet className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Budget</p>
            <h2 className="font-bold">₹{tripData.budget}</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaUsers className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Travellers</p>
            <h2 className="font-bold">
              {Number(tripData.adults) + Number(tripData.children)}
            </h2>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaHotel className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Hotel</p>
            <h2 className="font-bold">{tripData.hotelCategory}</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaCar className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Transport</p>
            <h2 className="font-bold">{tripData.transport}</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <FaMapMarkedAlt className="mx-auto text-2xl mb-2" />
            <p className="text-sm text-gray-200">Travel Style</p>
            <h2 className="font-bold">{tripData.travelStyle}</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;