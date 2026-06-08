import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.send(
        "service_30v1h95",
        "template_vt5whzq",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "NKMMlSwZC8Az0l9uC"
      );

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      px-6
      py-24
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        bg-sky-500/10
        blur-[180px]
        rounded-full
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 mb-3">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to freelance projects, frontend developer
            roles, internships and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
            bg-white/5
            backdrop-blur-md
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <a
                href="mailto:devanshkolhe95@gmail.com"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaEnvelope size={28} />
                <span>devanshkolhe95@gmail.com</span>
              </a>

              <a
                href="https://github.com/devanshkolhe14"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaGithub size={28} />
                <span>github.com/devanshkolhe14</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devansh-kolhe-7ba635204/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaLinkedin size={28} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
            bg-white/5
            backdrop-blur-md
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                p-4
                outline-none
                focus:border-sky-400
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                p-4
                outline-none
                focus:border-sky-400
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                p-4
                outline-none
                resize-none
                focus:border-sky-400
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-sky-500
                hover:bg-sky-600
                rounded-xl
                py-4
                font-semibold
                transition
                disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-center">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-400 text-center">
                  {error}
                </p>
              )}

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}