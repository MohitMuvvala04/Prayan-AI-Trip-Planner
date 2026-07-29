import { FaPlaneDeparture } from "react-icons/fa";

function Loading() {
  return (
    <div className="fixed inset-0 bg-white/90 dark:bg-black/80 flex items-center justify-center z-50 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-transparent dark:border-gray-700 p-10 max-w-md w-full text-center transition-colors duration-300">

        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="animate-spin text-5xl text-blue-600">
            <FaPlaneDeparture />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Planning Your Trip...
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Prayan AI is creating your personalized travel itinerary.
        </p>

        {/* Loading Steps */}
        <div className="space-y-3 text-left text-gray-700 dark:text-gray-300">
          <p>📍 Finding top attractions...</p>
          <p>🏨 Searching best hotels...</p>
          <p>🍽️ Discovering restaurants...</p>
          <p>🌤️ Checking weather...</p>
          <p>🗓️ Building itinerary...</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse w-3/4 rounded-full"></div>
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          This may take a few seconds...
        </p>
      </div>
    </div>
  );
}

export default Loading;