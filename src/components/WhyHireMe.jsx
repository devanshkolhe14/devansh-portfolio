import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaUsers, FaCheckCircle, FaLaptopCode, } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCode size={40} />,
    title: "Clean Code",
    description: "I write structured, maintainable and scalable frontend code using modern development practices.",
  },

  {
    icon: <FaMobileAlt size={40} />,
    title: "Responsive Design",
    description: "Every website is optimized for desktop, tablet and mobile devices for the best user experience.",
  },

  {
    icon: <FaRocket size={40} />,
    title: "Performance Focused",
    description: "Fast loading websites with optimized assets and smooth user interactions.",
  },

  {
    icon: <FaUsers size={40} />,
    title: "Client Friendly",
    description: "Clear communication, regular updates and reliable project delivery.",
  },

  {
    icon: <FaLaptopCode size={40} />,
    title: "Modern Technologies",
    description: "Experienced with HTML, CSS, JavaScript, React, Tailwind CSS and GitHub workflows.",
  },

  {
    icon: <FaCheckCircle size={40} />,
    title: "Quality Assurance",
    description: "Focused on creating bug-free, user-friendly and professional web experiences.",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* Purple Glow */}
      <div className="absolute w-[700px] h-[700px] bg-sky-500/10 blur-[180px] rounded-full"/>

      <div className="max-w-7xl w-full relative z-10">

        {/* Heading */}
        <motion.div initial={{opacity: 0, y: 50,}} whileInView={{opacity: 1, y: 0,}} viewport={{once: true}} transition={{duration: 0.8,}} className="text-center mb-20">
          <p className="text-sky-400 mb-3">Why Choose Me</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">Why Hire Me ?</h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto"> I combine technical skills, modern frontend development practices and attention to detail to create professional websites that deliver real value.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{reasons.map((item, index) => (
            <motion.div key={index} initial={{opacity: 0, y: 50,}} whileInView={{opacity: 1, y: 0,}} viewport={{once: true}} transition={{duration: 0.5, delay: index * 0.1,}} whileHover={{y: -10, scale: 1.03,}} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
              <div className="text-sky-400 mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-400 leading-8">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{opacity: 0, y: 40,}} whileInView={{opacity: 1, y: 0,}} viewport={{once: true}} transition={{duration: 0.8,}} className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6">Ready To Work Together?</h3>

          <a href="#contact" className="inline-block bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-xl transition duration-300">Contact Me</a>
        </motion.div>

      </div>
    </section>
  );
}