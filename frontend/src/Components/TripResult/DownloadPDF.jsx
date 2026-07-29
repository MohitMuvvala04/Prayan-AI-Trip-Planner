import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function DownloadPDF({ tripData, aiTrip }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(30, 64, 175);
    doc.text("Prayan AI - Travel Plan", 14, y);

    y += 12;

    // Trip Overview
    doc.setFontSize(14);
    doc.text("Trip Overview", 14, y);

    y += 5;

    autoTable(doc, {
      startY: y,
      head: [["Field", "Value"]],
      body: [
        ["Destination", tripData.destination],
        ["Duration", `${tripData.days} Days`],
        ["Budget", `Rs. ${tripData.budget}`],
        ["Adults", tripData.adults],
        ["Children", tripData.children],
        ["Travel Style", tripData.travelStyle],
        ["Hotel", tripData.hotelCategory],
        ["Transport", tripData.transport],
        ["Meal", tripData.meal],
      ],
    });

    y = doc.lastAutoTable.finalY + 10;

    // Weather
    if (aiTrip.weather) {
      doc.setFontSize(14);
      doc.text("Weather", 14, y);

      y += 5;

      autoTable(doc, {
        startY: y,
        head: [["Temperature", "Condition", "Humidity", "Wind"]],
        body: [[
          `${aiTrip.weather.temperature} °C`,
          aiTrip.weather.condition,
          `${aiTrip.weather.humidity}%`,
          `${aiTrip.weather.windSpeed} m/s`,
        ]],
      });

      y = doc.lastAutoTable.finalY + 10;
    }

    // Itinerary
    doc.setFontSize(14);
    doc.text("Day-wise Itinerary", 14, y);

    y += 5;

    aiTrip.itinerary.forEach((day) => {
      autoTable(doc, {
        startY: y,
        head: [[`Day ${day.day}`, day.title]],
        body: [
          ["Morning", day.morning.join(", ")],
          ["Afternoon", day.afternoon.join(", ")],
          ["Evening", day.evening.join(", ")],
          ["Night", day.night.join(", ")],
        ],
      });

      y = doc.lastAutoTable.finalY + 10;

      if (y > 250) {
        doc.addPage();
        y = 20;
      }
    });

    // Hotels
    doc.addPage();

    doc.setFontSize(16);
    doc.text("Hotel Suggestions", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Hotel", "Location", "Price", "Rating"]],
      body: aiTrip.hotelSuggestions.map((hotel) => [
        hotel.name,
        hotel.location,
        hotel.pricePerNight,
        hotel.rating,
      ]),
    });

    // Restaurants
    doc.addPage();

    doc.setFontSize(16);
    doc.text("Restaurant Recommendations", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Restaurant", "Cuisine", "Must Try", "Price"]],
      body: aiTrip.foodRecommendations.map((food) => [
        food.name,
        food.cuisine,
        food.mustTry,
        food.priceRange,
      ]),
    });

    // Tips
    doc.addPage();

    doc.setFontSize(16);
    doc.text("Travel Tips", 14, 20);

    aiTrip.travelTips.forEach((tip, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${tip}`, 20, 35 + index * 10);
    });

    doc.save(`Prayan-AI-${tripData.destination}.pdf`);
  };

  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={downloadPDF}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
      >
        📄 Download PDF
      </button>
    </div>
  );
}