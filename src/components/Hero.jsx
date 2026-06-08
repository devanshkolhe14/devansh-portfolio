import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[220px] rounded-full animate-pulse"></div>

      <div className="relative z-10 text-center max-w-5xl">
        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-purple-400 text-lg mb-4 tracking-widest uppercase"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          <span className="text-white">Devansh</span>
          <span className="text-purple-500"> Kolhe</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="text-xl md:text-3xl text-gray-300 mt-8"
        >
          Frontend Developer • React Developer • Web Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
            text-gray-400
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            leading-8
          "
        >
          Frontend Developer focused on creating responsive,
          modern and user-friendly websites using React,
          JavaScript and Tailwind CSS.

          I enjoy building clean interfaces,
          solving UI challenges and continuously
          improving my frontend development skills.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-12
          "
        >
          <a
            href="#projects"
            className="
              bg-purple-600
              hover:bg-purple-700
              px-8
              py-4
              rounded-xl
              transition
              duration-300
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              border
              border-purple-500
              hover:bg-purple-500
              px-8
              py-4
              rounded-xl
              transition
              duration-300
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-16
            mt-20
          "
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-5xl font-bold text-purple-500">
              2+
            </h3>

            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-5xl font-bold text-purple-500">
              8+
            </h3>

            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-5xl font-bold text-purple-500">
              1
            </h3>

            <p className="text-gray-400 mt-2">
              Internship
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}