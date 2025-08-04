'use client'

import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Work from "components/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkmode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // ← new

  useEffect(() => {
    setMounted(true); // ← tell React we're on the client now

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

  if (!mounted) return null; // ← avoid rendering mismatched UI

  return (
    <>
      <main className="my-0 mx-auto">
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
