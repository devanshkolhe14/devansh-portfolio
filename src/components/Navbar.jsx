import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "credentials",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Credentials", id: "credentials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-lg
      bg-black/30
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        py-5
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
          text-2xl
          font-bold
          text-purple-500
          "
        >
          Devansh
        </a>

        {/* Desktop Menu */}
        <ul
          className="
          hidden
          md:flex
          gap-8
          items-center
          "
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`
                  transition-all
                  duration-300
                  ${
                    activeSection === link.id
                      ? "text-purple-500 font-semibold"
                      : "text-gray-300 hover:text-purple-500"
                  }
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="
          md:hidden
          text-2xl
          text-white
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-[#0b0b16]
          border-t
          border-white/10
          "
        >
          <ul
            className="
            flex
            flex-col
            p-6
            gap-5
            "
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block
                    transition-all
                    duration-300
                    ${
                      activeSection === link.id
                        ? "text-purple-500 font-semibold"
                        : "text-gray-300"
                    }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}