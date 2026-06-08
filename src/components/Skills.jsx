import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaMobileAlt,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const frontendSkills = [
  {
    name: "HTML5",
    percentage: 95,
    icon: <FaHtml5 size={40} />,
  },
  {
    name: "CSS3",
    percentage: 90,
    icon: <FaCss3Alt size={40} />,
  },
  {
    name: "JavaScript",
    percentage: 85,
    icon: <FaJs size={40} />,
  },
  {
    name: "React",
    percentage: 80,
    icon: <FaReact size={40} />,
  },
  {
    name: "Tailwind CSS",
    percentage: 90,
    icon: <SiTailwindcss size={40} />,
  },
];

const toolsSkills = [
  {
    name: "Git",
    percentage: 85,
    icon: <FaGitAlt size={40} />,
  },
  {
    name: "GitHub",
    percentage: 90,
    icon: <FaGithub size={40} />,
  },
  {
    name: "Responsive Design",
    percentage: 95,
    icon: <FaMobileAlt size={40} />,
  },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="
      bg-white/5
      backdrop-blur-md
      border
      border-white/10
      rounded-3xl
      p-6
      hover:border-sky-400
      hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
      transition-all
      duration-300
      "
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-sky-400">
          {skill.icon}
        </div>

        <span className="font-bold text-sky-400">
          {skill.percentage}%
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-4">
        {skill.name}
      </h3>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${skill.percentage}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
          h-full
          bg-gradient-to-r
          from-sky-400
          to-cyan-400
          rounded-full
          "
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-24
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-sky-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 mb-3">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technologies I Use
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to create
            modern, responsive and high-performing
            web applications.
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
            text-3xl
            font-bold
            mb-10
            text-center
            text-sky-400
            "
          >
            Frontend Development
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
            text-3xl
            font-bold
            mb-10
            text-center
            text-sky-400
            "
          >
            Tools & Workflow
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {toolsSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}