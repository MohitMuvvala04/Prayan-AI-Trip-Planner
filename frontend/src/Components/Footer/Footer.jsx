import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Project */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              🌍 Prayan AI
            </h2>

            <p className="text-gray-300 leading-7">
              AI-powered travel planner that creates personalized itineraries,
              recommends hotels, restaurants, weather updates, and budget planning.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Technologies
            </h2>

            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300">
                <FaReact className="text-cyan-400" />
                React
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <FaNodeJs className="text-green-500" />
                Node.js + Express
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <SiTailwindcss className="text-sky-400" />
                Tailwind CSS
              </p>
            </div>
          </div>

          {/* Developer */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Developer
            </h2>

            <p className="mb-3 text-gray-300">
              Mohith Muvvala
            </p>

            <div className="flex gap-4 text-2xl">

  <a
    href="https://github.com/MohitMuvvala04"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaGithub className="cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/in/mohith-muvvala/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition-colors"
  >
    <FaLinkedin className="cursor-pointer" />
  </a>

</div>
          </div>

        </div>

        <hr className="my-8 border-gray-700 dark:border-gray-800" />

        <p className="text-center text-gray-400">
          © 2026 Prayan AI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;