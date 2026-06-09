import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Credentials from "./components/Credentials";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services";
import WhyHireMe from "./components/WhyHireMe";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#050816] text-white">
        <h1 className="text-6xl font-bold text-sky-400 animate-pulse">DEVANSH</h1>

        <p className="text-gray-400 mt-4">Frontend Developer</p>

        <div className="w-40 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-sky-400 animate-[loading_2.5s_linear_forwards]" />
        </div>
      </div>
    );
  }

  return (
    <>
  <ScrollProgress />
  <MouseGlow />
  <Navbar />

  <main className="relative z-10">
    <Hero />
    <About />
    <Services />
    <Skills />
    <Projects />
    <WhyHireMe />
    <ExperienceTimeline />
    <Credentials />
    <Contact />
    <Footer />
  </main>
</>
  );
}

export default App;