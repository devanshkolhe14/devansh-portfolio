import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Travique Images
import t1 from "../assets/projects/travique/1.jpg";
import t2 from "../assets/projects/travique/2.jpg";
import t3 from "../assets/projects/travique/3.jpg";
import t4 from "../assets/projects/travique/4.jpg";
import t5 from "../assets/projects/travique/5.jpg";
import t6 from "../assets/projects/travique/6.jpg";

// Fast Food Images
import f1 from "../assets/projects/fastfood/1.jpg";
import f2 from "../assets/projects/fastfood/2.jpg";
import f3 from "../assets/projects/fastfood/3.jpg";
import f4 from "../assets/projects/fastfood/4.jpg";
import f5 from "../assets/projects/fastfood/5.jpg";
import f6 from "../assets/projects/fastfood/6.jpg";

const projects = [
  {
    number: "01",
    title: "Travique Travel Website",

    description:
      "Modern travel website with responsive layouts, smooth navigation and engaging user experience built using HTML, CSS and JavaScript.",

    tech: ["HTML", "CSS", "JavaScript"],

    features: [
      "Fully Responsive Design",
      "Modern Travel UI",
      "Interactive Sections",
      "Mobile Friendly Layout",
      "Optimized Performance",
    ],

    images: [t1, t2, t3, t4, t5, t6],

    github: "https://github.com/devanshkolhe14",
    live: "https://travique-travel.netlify.app",
  },

  {
    number: "02",
    title: "Fast Food Restaurant Website",

    description:
      "Modern restaurant website featuring attractive layouts, responsive design and engaging food presentation.",

    tech: ["HTML", "CSS", "JavaScript"],

    features: [
      "Responsive Restaurant Design",
      "Interactive Food Menu",
      "Modern User Interface",
      "Mobile Optimized",
      "Fast Loading Experience",
    ],

    images: [f1, f2, f3, f4, f5, f6],

    github: "https://github.com/devanshkolhe14",
    live: "https://fastfoodsrestaurant.netlify.app",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-7xl w-full">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-3">
              My Work
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                backdrop-blur-lg
                hover:border-purple-500
                transition-all
                duration-300
                "
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="
                  w-full
                  h-72
                  object-cover
                  cursor-pointer
                  "
                  onClick={() =>
                    setSelectedProject(project)
                  }
                />

                <div className="p-8">

                  <p className="text-purple-400 text-sm mb-2">
                    Project {project.number}
                  </p>

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>

                  <button
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    className="
                    bg-purple-600
                    hover:bg-purple-700
                    px-6
                    py-3
                    rounded-xl
                    transition
                    "
                  >
                    View Details
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
      className="
      fixed
      inset-0
      bg-black/90
      z-[9999]
      overflow-y-auto
      p-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Premium Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="
          fixed
          top-6
          right-6
          z-[10000]
          w-14
          h-14
          rounded-full
          bg-purple-600
          hover:bg-purple-700
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          "
        >
          <FaTimes size={24} />
        </button>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()}
          className="
          bg-[#0b0b16]
          border
          border-white/10
          rounded-3xl
          overflow-hidden
          "
        >

          {/* Slider */}
          <Swiper
            modules={[
              Pagination,
              Navigation,
              Autoplay,
            ]}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            className="h-[500px]"
          >
            {selectedProject.images.map(
              (image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt=""
                    className="
                    w-full
                    h-full
                    object-cover
                    "
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>

          <div className="p-8">

            <h2 className="text-4xl font-bold mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              {selectedProject.description}
            </p>

            {/* Features */}
            <h3 className="text-2xl font-bold mb-5">
              Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {selectedProject.features.map(
                (feature, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >
                    <FaCheckCircle
                      className="text-purple-500"
                    />

                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

            {/* Tech Stack */}
            <h3 className="text-2xl font-bold mb-5">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3 mb-10">
              {selectedProject.tech.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-purple-500/20
                    border
                    border-purple-500
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="
                bg-purple-600
                hover:bg-purple-700
                px-6
                py-3
                rounded-xl
                flex
                items-center
                gap-2
                "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="
                border
                border-purple-500
                hover:bg-purple-500
                px-6
                py-3
                rounded-xl
                flex
                items-center
                gap-2
                "
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}