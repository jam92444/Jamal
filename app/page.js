"use client";

import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import { useEffect, useState } from "react";
import About from "../components/About";

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
      <Head>
        <title>Mohamed Yusuf Jamal | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am a developer skilled in React, TypeScript, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Mohamed Yusuf Jamal | Portfolio" />

        <meta
          property="og:description"
          content="Welcome to my portfolio. I am a developer skilled in React, TypeScript, and more."
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Yusuf Jamal",
              url: "https://mohamedyusufjamalportfolio.vercel.app/",
              sameAs: [
                "https://github.com/jam92444",
                "https://www.linkedin.com/in/mohamed-yusuf-jamal-106772293/",
              ],
              jobTitle: "Frontend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "M-Guru Company",
              },
            }),
          }}
        />
      </Head>

      <main>
        <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkmode={isDarkmode} />
        <section id="about">
          <About isDarkmode={isDarkmode} />
        </section>
        {/* <section id="services">
          <Services isDarkmode={isDarkmode} />
        </section> */}
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
