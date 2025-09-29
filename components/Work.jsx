import { assets, workData } from "../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkmode }) => {
  return (
    <section
      id="work"
      aria-label="Portfolio projects"
      className="w-full px-[12%] py-10 scroll-mt-10 select-none max-w-[1980px] mx-auto"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mx-auto mt-5 mb-12 font-Ovo max-w-2xl"
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in frontend development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {workData.slice(0, 4).map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            tabIndex={0}
            aria-labelledby={`project-title-${index}`}
            aria-describedby={`project-desc-${index}`}
          >
            <div className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2
                  id={`project-title-${index}`}
                  className="sm:text-sm md:text-md font-semibold"
                >
                  {project.title}
                </h2>
                <p
                  id={`project-desc-${index}`}
                  className="text-sm text-gray-700"
                >
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-xl px-2 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition cursor-pointer"
                aria-label={`Live demo of ${project.title}`}
              >
                Live
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        href="/projects"
        aria-label="Show more projects"
        disabled={true}
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border border-[0.5] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover`}
      >
        Show more{" "}
        <Image
          src={
            isDarkmode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          className="w-4"
          alt="Right arrow"
        />
      </motion.button>
    </section>
  );
};

export default Work;
