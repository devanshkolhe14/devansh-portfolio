import { motion } from "framer-motion";
import { FaLaptopCode, FaReact, FaMobileAlt, FaRocket, } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Frontend Development",
    description: "Building modern, responsive and user-friendly websites using HTML, CSS, JavaScript and industry best practices.",
  },

  {
    icon: <FaReact size={40} />,
    title: "React Development",
    description: "Creating dynamic single-page applications with React, reusable components and modern frontend architecture.",
  },

  {
    icon: <FaMobileAlt size={40} />,
    title: "Responsive Web Design",
    description: "Designing websites that work perfectly across desktops, tablets and mobile devices with seamless user experiences.",
  },

  {
    icon: <FaRocket size={40} />,
    title: "Website Optimization",
    description: "Improving website performance, loading speed, SEO fundamentals and overall user experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-sky-500/10 blur-[180px] rounded-full"/>

      <div className="max-w-7xl w-full relative z-10">

        {/* Heading */}
        <motion.div initial={{opacity: 0, y: 50,}} whileInView={{opacity: 1,y: 0,}} viewport={{ once: true }} transition={{duration: 0.8,}} className="text-center mb-20">
          <p className="text-sky-400 mb-3">What I Do</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">Services</h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">I help businesses and individuals build fast, modern and responsive websites with clean user interfaces and professional frontend development practices.</p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{opacity: 0, y: 60,}} whileInView={{opacity: 1, y: 0,}} viewport={{once: true }} transition={{duration: 0.6, delay: index * 0.15,}} whileHover={{y: -10, scale: 1.03,}} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
              <div className="text-sky-400 mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-8">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}