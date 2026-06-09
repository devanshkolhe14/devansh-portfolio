import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "Diploma Completed",
    company: "Electronics & Telecommunications",
    description: "Completed Diploma in Electronics and Telecommunications from Alamuri Ratnamala Institute of Engineering and Technology.",
  },

  {
    year: "2024",
    title: "Started Web Development",
    company: "Frontend Learning Journey",
    description: "Learned HTML5, CSS3, JavaScript, Responsive Web Design and modern website development concepts.",
  },

  {
    year: "2025",
    title: "Jr. Web Developer",
    company: "Mesotek Technologies Pvt. Ltd.",
    description: "Worked on responsive web pages, SEO optimization, Google Analytics, Photoshop, Photopea, UI improvements and website performance enhancement.",
  },

  {
    year: "2025",
    title: "React Developer",
    company: "Frontend Projects",
    description: "Built responsive projects using ReactJS, JavaScript and modern UI practices. Developed portfolio and business websites.",
  },

  {
    year: "Nov 2025 - Present",
    title: "Web Developer",
    company: "Dohrnii Exim Private Limited",
    description: "Developing responsive websites using ReactJS, JavaScript, HTML and CSS. Improving performance, SEO and cross-device compatibility while managing projects using GitHub.",
  },

  {
    year: "2026",
    title: "Frontend Developer",
    company: "Career Growth",
    description: "Actively building real-world React applications, expanding technical skills and preparing for professional frontend opportunities.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <p className="text-sky-400 mb-3">Professional Journey</p>

          <h2 className="text-5xl font-bold">Experience Timeline</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">My learning path from education to professional frontend development and real-world React projects.</p>
        </motion.div>

        <div className="relative">

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-purple-800 -translate-x-1/2"/>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className={`
                relative
                flex
                mb-16
                ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
                }
              `}
            >

              <div className="w-full md:w-[45%] bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-sky-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">

                <span className="text-sky-400 font-semibold">{item.year}</span>

                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                <h4 className="text-sky-300 mt-2">{item.company}</h4>

                <p className="text-gray-300 mt-4 leading-7">{item.description}</p>

              </div>

              <div className="hidden md:block absolute left-1/2 top-10 w-5 h-5 rounded-full bg-sky-400 shadow-[0_0_25px_#a855f7] -translate-x-1/2"
              />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}