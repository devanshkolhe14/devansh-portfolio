import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex justify-center">
          
          <motion.div animate={{y: [0, -15, 0],}} transition={{duration: 4, repeat: Infinity, ease: "easeInOut",}} className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-sky-500 blur-[100px] opacity-50 rounded-full"></div>

            {/* Image */}
            <img src={profile} alt="Devansh Kolhe" className="relative z-10 w-96 h-96 object-cover rounded-full border-4 border-sky-400 shadow-[0_0_80px_rgba(168,85,247,0.6)]" />
          
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-sky-400 mb-3">About Me</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">Frontend Developer</h2>

          <p className="text-gray-300 text-lg leading-9 mb-8">I am Devansh Kolhe, a passionate Frontend Developer focused on building responsive, modern and user-friendly websites using React, JavaScript and Tailwind CSS.</p>

          <p className="text-gray-300 text-lg leading-9 mb-10">I enjoy creating clean interfaces, solving UI challenges and continuously improving my frontend development skills.</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 rounded-full border border-sky-400 bg-sky-400/10">React</span>

            <span className="px-4 py-2 rounded-full border border-sky-400 bg-sky-400/10">JavaScript</span>

            <span className="px-4 py-2 rounded-full border border-sky-400 bg-sky-400/10">Tailwind CSS</span>

            <span className="px-4 py-2 rounded-full border border-sky-400 bg-sky-400/10">Responsive Design</span>

            <span className="px-4 py-2 rounded-full border border-sky-400 bg-sky-400/10">GitHub</span>
          
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10">

            <div>
              <h3 className="text-5xl font-bold text-sky-400">2+</h3>

              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-sky-400">8+</h3>

              <p className="text-gray-400 mt-2">Skills</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-sky-400">1+</h3>

              <p className="text-gray-400 mt-2">Year Learning</p>
            </div>

          </div>

          {/* Resume Button */}
          <a href="/resume.pdf"download className="inline-block bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-xl font-semibold">Download Resume</a>
        </motion.div>

      </div>
    </section>
  );
}