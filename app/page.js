"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useEffect, useState } from "react";

// Lazy-loaded components
const About = dynamic(() => import("../components/About"));
const Work = dynamic(() => import("../components/Work"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  const [isDarkmode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkmode]);

  return (
    <>
      <main>
        <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkmode={isDarkmode} />
        <section id="about">
          <About isDarkmode={isDarkmode} />
        </section>
        <section id="work">
          <Work isDarkmode={isDarkmode} />
        </section>
        <section id="contact">
          <Contact isDarkmode={isDarkmode} />
        </section>
      </main>

      <footer>
        <Footer isDarkmode={isDarkmode} />
      </footer>
    </>
  );
}
