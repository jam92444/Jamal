'use client'

import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20">
   
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Md. Yusuf Jamal{" "}
        <Image src={assets.hand_icon} className="w-6" alt="Waving hand emoji" />
      </motion.h2>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Frontend developer based in India.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a fresher developer with a knack for crafting robust and scalable
        web applications. I have honed my skills in React, JavaScript, and
        Bootstrap.
      </motion.p>

      <nav
        className="flex flex-col sm:flex-row gap-4 mt-4"
        aria-label="Primary actions"
      >
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          aria-label="Contact me section"
        >
          Contact me{" "}
          <Image
            className="w-4"
            src={assets.right_arrow_white}
            alt="Right arrow icon"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          href="/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          aria-label="Download my resume"
        >
          My resume{" "}
          <Image
            className="w-4"
            src={assets.download_icon}
            alt="Download icon"
          />
        </motion.a>
      </nav>
    </header>
  );
};

export default Header;
