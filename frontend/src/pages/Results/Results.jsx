import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { saveTrip } from "../../utils/tripStorage";
import Header from "../../Components/TripResult/Header";
import QuickNavigation from "../../Components/TripResult/QuickNavigation";
import TripOverview from "../../Components/TripResult/TripOverview";
import DayCard from "../../Components/TripResult/DayCard";
import BudgetTable from "../../Components/TripResult/BudgetTable";
import TravelTips from "../../Components/TripResult/TravelTips";
import HotelCards from "../../Components/TripResult/HotelCards";
import RestaurantCards from "../../Components/TripResult/RestaurantCards";
import WeatherCard from "../../Components/TripResult/WeatherCard";
import DownloadPDF from "../../Components/TripResult/DownloadPDF";
import BackToTop from "../../Components/BackToTop/BackToTop";

function Results() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          No Trip Data Found
        </h1>
      </div>
    );
  }

  const { tripData, aiTrip } = state;
  const hasSaved = useRef(false);

  useEffect(() => {
    if (!hasSaved.current) {
      saveTrip(tripData, aiTrip);
      hasSaved.current = true;
    }
  }, [tripData, aiTrip]);

  console.log("Weather:", aiTrip.weather);
  console.log("AI Trip:", aiTrip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 py-10 px-5">
      <div
        id="trip-report"
        className="max-w-7xl mx-auto"
      >
        <DownloadPDF
          tripData={tripData}
          aiTrip={aiTrip}
        />

        <Header
          tripData={tripData}
          aiTrip={aiTrip}
        />

        <QuickNavigation />

        <TripOverview tripData={tripData} />

        <DayCard aiTrip={aiTrip} />

        <WeatherCard weather={aiTrip.weather} />

        <HotelCards hotels={aiTrip.hotelSuggestions} />

        <RestaurantCards
          restaurants={aiTrip.foodRecommendations}
        />

        <BudgetTable budget={Number(tripData.budget)} />

        <TravelTips />

        <BackToTop />
      </div>
    </div>
  );
}

export default Results;