'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import { useEffect, useState } from "react";


export default function Home() {
  const [isDarkmode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      (localStorage.theme =
        "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches))
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
    <div>
      <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkmode={isDarkmode} />
      <About isDarkmode={isDarkmode} />
      {/* <Services  isDarkmode={isDarkmode} /> */}
      <Work isDarkmode={isDarkmode} />
      <Contact isDarkmode={isDarkmode} />
      <Footer isDarkmode={isDarkmode} />
    </div>
  );
};