import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 mb-3">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to freelance projects, frontend developer roles,
            internships and exciting collaborations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <motion.a
            href="mailto:devanshkolhe95@gmail.com"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition-all
              duration-300
            "
          >
            <FaEnvelope
              size={50}
              className="mx-auto mb-5 text-purple-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              devanshkolhe95@gmail.com
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/devanshkolhe14"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition-all
              duration-300
            "
          >
            <FaGithub
              size={50}
              className="mx-auto mb-5 text-purple-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              GitHub
            </h3>

            <p className="text-gray-400">
              github.com/devanshkolhe14
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/devansh-kolhe-7ba635204/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition-all
              duration-300
            "
          >
            <FaLinkedin
              size={50}
              className="mx-auto mb-5 text-purple-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              Connect With Me
            </p>
          </motion.a>

        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="mailto:devanshkolhe95@gmail.com"
            className="
              inline-block
              bg-purple-600
              hover:bg-purple-700
              px-8
              py-4
              rounded-xl
              transition
              font-semibold
            "
          >
            Let's Connect
          </a>
        </motion.div>

      </div>
    </section>
  );
}