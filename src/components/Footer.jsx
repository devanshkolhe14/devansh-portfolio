import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Text */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold">
              <span className="text-white">
                Devansh
              </span>

              <span className="text-purple-500">
                {" "}Kolhe
              </span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Frontend Developer passionate about building
              modern, responsive and user-friendly web
              applications using React and JavaScript.
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            <a
              href="https://github.com/devanshkolhe14"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-600
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/devansh-kolhe-7ba635204/"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-600
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:devanshkolhe95@gmail.com"
              className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-600
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaEnvelope size={22} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Devansh Kolhe. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with
            <FaHeart className="text-purple-500" />
            using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}