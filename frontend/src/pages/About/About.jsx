import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGoogle,
} from "react-icons/si";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 transition-colors duration-300">

          <h1 className="text-5xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
            🌍 About Prayan AI
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-8">
            Prayan AI is an intelligent travel planner that creates
            personalized travel itineraries using Artificial Intelligence.
            Users can generate complete travel plans based on their
            destination, budget, travel style, hotel preference,
            transportation, and meal choices.
          </p>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 Technologies Used
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 text-center border border-transparent dark:border-gray-700 transition-colors duration-300">
                <FaReact className="text-5xl text-cyan-500 mx-auto mb-3" />
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  React
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Frontend UI Development
                </p>
              </div>

              <div className="bg-green-50 dark:bg-gray-800 rounded-2xl p-6 text-center border border-transparent dark:border-gray-700 transition-colors duration-300">
                <FaNodeJs className="text-5xl text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  Node.js & Express
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Backend API Development
                </p>
              </div>

              <div className="bg-sky-50 dark:bg-gray-800 rounded-2xl p-6 text-center border border-transparent dark:border-gray-700 transition-colors duration-300">
                <SiTailwindcss className="text-5xl text-sky-500 mx-auto mb-3" />
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Responsive UI Styling
                </p>
              </div>

            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🤖 APIs Used
            </h2>

            <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>✅ Gemini AI API - Generates personalized travel itineraries.</li>
              <li>✅ OpenWeather API - Provides current weather information.</li>
              <li>✅ Unsplash API - Displays destination images.</li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              👨‍💻 Developer
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-transparent dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Mohith Muvvala (AP22110010030)
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3">
                B.Tech Computer Science Engineering
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                SRM University, AP
              </p>

              <div className="flex gap-4 mt-5">
                <FaGithub className="text-3xl text-gray-700 dark:text-gray-300" />
                <SiGoogle className="text-3xl text-red-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;