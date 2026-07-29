import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Prayan AI Backend is Running 🚀",
  });
});

// Generate AI Trip
app.post("/generate-trip", async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      adults,
      children,
      travelStyle,
      hotelCategory,
      transport,
      meal,
    } = req.body;

    const prompt = `
You are an expert travel planner.

Generate a personalized travel itinerary.

Trip Details:

Destination: ${destination}
Duration: ${days} Days
Budget: ₹${budget}
Adults: ${adults}
Children: ${children}
Travel Style: ${travelStyle}
Hotel Category: ${hotelCategory}
Transport: ${transport}
Meal Preference: ${meal}

IMPORTANT:

Return ONLY valid JSON.

Do NOT return Markdown.

Do NOT return headings.

Do NOT use triple backticks.

Return EXACTLY in this format:

{
  "tripOverview": {
    "destination": "${destination}",
    "duration": "${days} Days",
    "budget": "${budget}",
    "travelStyle": "${travelStyle}",
    "hotelCategory": "${hotelCategory}",
    "transport": "${transport}",
    "meal": "${meal}"
  },

  "itinerary": [
    {
      "day": 1,
      "title": "",
      "morning": [],
      "afternoon": [],
      "evening": [],
      "night": []
    }
  ],

  "budgetBreakdown": {
    "hotel": "",
    "transport": "",
    "food": "",
    "activities": "",
    "miscellaneous": "",
    "total": "${budget}"
  },

  "hotelSuggestions": [
  {
    "name": "",
    "location": "",
    "pricePerNight": "",
    "rating": "",
    "description": ""
  },
  {
    "name": "",
    "location": "",
    "pricePerNight": "",
    "rating": "",
    "description": ""
  },
  {
    "name": "",
    "location": "",
    "pricePerNight": "",
    "rating": "",
    "description": ""
  }
],

  "foodRecommendations": [
  {
    "name": "",
    "cuisine": "",
    "mustTry": "",
    "priceRange": ""
  },
  {
    "name": "",
    "cuisine": "",
    "mustTry": "",
    "priceRange": ""
  },
  {
    "name": "",
    "cuisine": "",
    "mustTry": "",
    "priceRange": ""
  }
],

  "travelTips": [
  "",
  "",
  "",
  "",
  ""
]
}
`;

    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
      contents: prompt,
    });

    // Get AI response
    let text = response.text.trim();

    // Remove markdown if Gemini accidentally adds it
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    // Convert JSON string into JavaScript object
    let trip;

try {
  trip = JSON.parse(text);
} catch (err) {
  return res.status(500).json({
    success: false,
    message: "The AI returned an invalid response. Please try again.",
  });
}

if (
  !trip.tripOverview ||
  !Array.isArray(trip.itinerary) ||
  !trip.budgetBreakdown ||
  !Array.isArray(trip.hotelSuggestions) ||
  !Array.isArray(trip.foodRecommendations) ||
  !Array.isArray(trip.travelTips)
) {
  return res.status(500).json({
    success: false,
    message: "The AI returned incomplete trip data. Please try again.",
  });
}


    let destinationImage = "";

try {
  const imageResponse = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: destination,
        per_page: 1,
        orientation: "landscape",
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (imageResponse.data.results.length > 0) {
    destinationImage = imageResponse.data.results[0].urls.regular;
  }
} catch (err) {
  console.log("Unsplash Image Error:", err.message);
}

let weather = {};

try {
  const weatherResponse = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: destination,
        appid: process.env.WEATHER_API_KEY,
        units: "metric",
      },
    }
  );

  weather = {
    temperature: weatherResponse.data.main.temp,
    condition: weatherResponse.data.weather[0].main,
    humidity: weatherResponse.data.main.humidity,
    windSpeed: weatherResponse.data.wind.speed,
  };
} catch (err) {
  console.log("Weather API Error:", err.message);
}

   trip.destinationImage = destinationImage;
   trip.weather = weather;

res.json({
  success: true,
  trip,
}); 
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate trip",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});