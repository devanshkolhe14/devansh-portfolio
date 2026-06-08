import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={45} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={45} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={45} />,
  },
  {
    name: "React",
    icon: <FaReact size={45} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={45} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={45} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={45} />,
  },
  {
    name: "Responsive Design",
    icon: "📱",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 mb-3">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technologies I Use
          </h2>

          <p className="text-gray-400 text-lg">
            Tools and technologies I use to build modern websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              backdrop-blur-sm
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition-all
              duration-300
              "
            >
              <div className="flex justify-center mb-5 text-purple-400">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}