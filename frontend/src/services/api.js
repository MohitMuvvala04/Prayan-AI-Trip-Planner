import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
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