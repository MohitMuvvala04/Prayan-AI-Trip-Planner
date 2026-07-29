import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { generateTrip } from "../../services/api";
import Loading from "../Loading/Loading";
import { FaInfoCircle } from "react-icons/fa";

function TripForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortControllerRef = useRef(null);
  const navigate = useNavigate();

  const [tripData, setTripData] = useState({
    destination: "",
    days: "",
    budget: "",
    adults: 1,
    children: 0,
    travelStyle: "",
    hotelCategory: "",
    transport: "",
    meal: "",
  });

  const handleChange = (e) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
  if (step === 1) {
    if (!tripData.destination.trim()) {
      setError("📍 Please enter a destination.");
      return;
    }

    if (!tripData.days || Number(tripData.days) <= 0) {
      setError("📅 Please enter a valid number of days.");
      return;
    }

    if (!tripData.budget || Number(tripData.budget) <= 0) {
      setError("💰 Please enter a valid budget.");
      return;
    }
  }

  if (step === 2) {
  if (!tripData.adults || Number(tripData.adults) < 1) {
    setError("👨 At least one adult is required.");
    return;
  }

  if (!tripData.travelStyle) {
    setError("✈️ Please select a travel style.");
    return;
  }
}

  setError("");
  setStep(step + 1);
};

  const prevStep = () => setStep(step - 1);

  // Generate AI Trip
  const handleGenerateTrip = async () => {

     if (abortControllerRef.current) {
    abortControllerRef.current.abort();
  }

  abortControllerRef.current = new AbortController();

  if (!tripData.hotelCategory) {
    setError("🏨 Please select a hotel category.");
    return;
  }

  if (!tripData.transport) {
    setError("🚗 Please select your transport.");
    return;
  }

  if (!tripData.meal) {
    setError("🍽️ Please select your meal preference.");
    return;
  }

  try {
    setError("");
    setLoading(true);


      const response = await generateTrip(
  tripData,
  abortControllerRef.current.signal
);

console.log(response);
console.log(response.trip);

      navigate("/results", {
        state: {
          tripData,
          aiTrip: response.trip,
        },
      });
    } catch (error) {

       if (
    error.name === "CanceledError" ||
    error.name === "AbortError"
  ) {
    return;
  }


  console.error(error);

  if (!navigator.onLine) {
    setError("🌐 No internet connection. Please check your network.");
  } else if (error.response) {
    setError("⚠️ Unable to generate your trip. Please try again.");
  } else {
    setError("❌ Something went wrong. Please try again later.");
  }
} finally {
      setLoading(false);
    }
  };

  return (
     <>
    
    {loading && <Loading />}
    <section 
      id="trip-planner"
       className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/60 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 transition-colors duration-300">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            ✨ Plan Your Journey
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-8">
            Step {step} of 3
          </p>

          {error && (
  <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded-xl text-center">
    <p className="mb-3">{error}</p>

    <button
      onClick={handleGenerateTrip}
      disabled={loading}
      className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition"
    >
      🔄 Retry
    </button>
  </div>
)}

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-10">
            <div
              className={`bg-blue-600 h-3 rounded-full transition-all duration-500 ${
                step === 1
                  ? "w-1/3"
                  : step === 2
                  ? "w-2/3"
                  : "w-full"
              }`}
            ></div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <input
                type="text"
                name="destination"
                placeholder="📍 Destination"
                value={tripData.destination}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                name="days"
                placeholder="📅 Number of Days"
                value={tripData.days}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                name="budget"
                placeholder="💰 Budget"
                value={tripData.budget}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
         
          {step === 2 && (
  <div className="space-y-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
          👨 Number of Adults
        </label>
        <input
          type="number"
          name="adults"
          value={tripData.adults}
          onChange={handleChange}
          min="1"
          className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
          👶 Number of Children
        </label>
        <input
          type="number"
          name="children"
          value={tripData.children}
          onChange={handleChange}
          min="0"
          className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <p className="mt-2 flex items-center gap-2 text-sm text-blue-600">
  <FaInfoCircle className="text-blue-500" />
  Children below 12 years of age.
</p>

      </div>

    </div>

    <div>
      <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
        ✈️ Travel Style
      </label>

      <select
        name="travelStyle"
        value={tripData.travelStyle}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">Select Travel Style</option>
        <option value="Adventure">Adventure</option>
        <option value="Family">Family</option>
        <option value="Luxury">Luxury</option>
        <option value="Solo">Solo</option>
        <option value="Romantic">Romantic</option>
        <option value="Business">Business</option>
      </select>
    </div>

    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-300 hover:bg-gray-400 px-8 py-3 rounded-xl"
      >
        ← Back
      </button>

      <button
        onClick={nextStep}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
      >
        Next →
      </button>
    </div>

  </div>
)}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <select
                name="hotelCategory"
                value={tripData.hotelCategory}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <option value="">🏨 Hotel Category</option>
                <option value="Budget">Budget</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>

              <select
                name="transport"
                value={tripData.transport}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <option value="">🚗 Transport</option>
                <option value="Car">Car</option>
                <option value="Flight">Flight</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
              </select>

              <select
                name="meal"
                value={tripData.meal}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <option value="">🍽 Meal Preference</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Both">Both</option>
              </select>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 px-8 py-3 rounded-xl"
                >
                  ← Back
                </button>

                <button
                  onClick={handleGenerateTrip}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl"
                >
                  {loading ? "Generating..." : "✨ Generate AI Trip"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}

export default TripForm;