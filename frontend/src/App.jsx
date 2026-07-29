import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TripForm from "./Components/TripForm/TripForm";

import Results from "./pages/Results/Results";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Features from "./Components/Features/Features";
import TripHistory from "./pages/TripHistory/TripHistory";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TripForm />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<TripHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;