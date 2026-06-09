import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaBriefcase, FaCheckCircle, FaTimes,} from "react-icons/fa";
import experienceLetter from "../assets/credentials/experience-letter.jpg";
import certificate from "../assets/credentials/frontend-certificate.png";

export default function Credentials() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        id="credentials"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <p className="text-sky-400 mb-3">Credentials & Verification</p>

            <h2 className="text-5xl md:text-6xl font-bold">Professional Proof</h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Verified professional experience and certifications demonstrating my frontend development journey.</p>
          </motion.div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Experience Letter */}
            <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} whileHover={{y: -10, scale: 1.02,}} className=" bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-sky-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]transition-all duration-300">
              <div className="relative">
                <img src={experienceLetter} alt="Experience Letter" className=" w-full h-[320px] object-cover cursor-pointer" onClick={() => setSelectedImage(experienceLetter)}/>

                <div className=" absolute top-4 right-4 bg-green-500 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <FaCheckCircle />Verified
                </div>
              </div>

              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-sky-400" size={24}/>

                  <h3 className="text-2xl font-bold">Experience Letter</h3>
                </div>

                <p className="text-sky-400 mb-3">Mesotek Technologies Pvt. Ltd.</p>

                <p className="text-gray-400 leading-7">Worked as Jr. Web Designer. Contributed to responsive websites, UI improvements, SEO optimization, website maintenance and frontend development.
                </p>

              </div>
            </motion.div>

            {/* Certificate */}
            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              whileHover={{y: -10, scale: 1.02,}} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-sky-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300">
              <div className="relative">

                <img src={certificate} alt="Frontend Certificate" className=" w-full h-[320px] object-cover cursor-pointer" onClick={() => setSelectedImage(certificate)} />

                <div className="absolute top-4 right-4 bg-green-500 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <FaCheckCircle />Certified
                </div>

              </div>

              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">

                  <FaCertificate className="text-sky-400" size={24} />

                  <h3 className="text-2xl font-bold">Frontend Developer</h3>

                </div>

                <p className="text-sky-400 mb-3">Professional Certification</p>

                <p className="text-gray-400 leading-7">Covers HTML5, CSS3, JavaScript, Responsive Design, Modern UI Development, Frontend Best Practices and Web Technologies.</p>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>{selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedImage(null)
            }
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6">
            <button className="absolute top-6 right-6 text-white text-3xl"><FaTimes /></button>

            <motion.img
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              src={selectedImage}
              alt="Credential" className=" max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"/>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}