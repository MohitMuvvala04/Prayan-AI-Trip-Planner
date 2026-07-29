const STORAGE_KEY = "prayan_ai_trip_history";

// Get all saved trips
export const getSavedTrips = () => {
  const trips = localStorage.getItem(STORAGE_KEY);
  return trips ? JSON.parse(trips) : [];
};

// Save a new trip
export const saveTrip = (tripData, aiTrip) => {
  const trips = getSavedTrips();

  // Prevent saving the same trip twice in a row
  const latestTrip = trips[0];

  if (
    latestTrip &&
    latestTrip.destination === tripData.destination &&
    latestTrip.days === tripData.days &&
    latestTrip.budget === tripData.budget
  ) {
    return;
  }

  const newTrip = {
    id: Date.now(),
    destination: tripData.destination,
    days: tripData.days,
    budget: tripData.budget,
    createdAt: new Date().toLocaleString(),
    tripData,
    aiTrip,
  };

  trips.unshift(newTrip);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
};

// Delete a saved trip
export const deleteTrip = (id) => {
  const trips = getSavedTrips().filter((trip) => trip.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
};