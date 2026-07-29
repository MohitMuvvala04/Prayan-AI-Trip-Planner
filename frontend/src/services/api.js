import axios from "axios";

const API = axios.create({
  baseURL: "https://prayan-ai-trip-planner.onrender.com",
});

export const generateTrip = async (tripData, signal) => {
  const response = await API.post(
    "/generate-trip",
    tripData,
    {
      signal,
    }
  );

  return response.data;
};