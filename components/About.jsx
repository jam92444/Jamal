import { assets, infoList, toolsData } from "../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkmode }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 mt-10 scroll-mt-10 max-w-[1980px] mx-auto"
      aria-label="About section"
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h3>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex w-full max-w-[1980px] flex-col lg:flex-row items-center gap-20 my-20 mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-72 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="Md. Yusuf Jamal - Frontend Developer"
            width={380} // Set this to your actual image width in pixels
            height={320} // Set this to your actual image height in pixels
            className="w-full rounded-2xl"
            priority
          />
        </motion.div>

        {/* Description & Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed text-gray-800 dark:text-white/80">
            I’m Md. Yusuf Jamal, a passionate frontend developer with a strong
            foundation in <strong>JavaScript</strong>, <strong>React</strong>,
            <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>. I
            focus on building responsive, user-friendly interfaces and writing
            clean, maintainable code. Eager to grow and contribute, I strive to
            craft seamless web experiences that delight users.
          </p>

          {/* Info Grid */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="border-[0.5px] hover:bg-lightHover border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkmode ? iconDark : icon}
                  alt={`${title} icon`}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h4>

          <ul
            className="flex items-center gap-3 sm:gap-5"
            aria-label="Technologies and tools I use"
          >
            {toolsData.map(({ src, name }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
                title={name}
              >
                <Image
                  src={src}
                  alt={`${name} logo`}
                  width={28} // use appropriate size
                  height={28}
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
