import { assets, workData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Project = ({ isDarkmode }) => {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-10 select-none"
      aria-label="Portfolio Projects"
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
        className="grid grid-cols-1 sm:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.article
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group mt-10"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            aria-label={`Project titled ${project.title}`}
          >
            <div className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <button
                type="button"
                onClick={() => navigate(`/projects/${project.id}`)}
                className="text-left focus:outline-none"
                aria-label={`View details of project ${project.title}`}
              >
                <h3 className="sm:text-sm md:text-md font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-xl px-2 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition cursor-pointer"
                aria-label={`Visit live site of project ${project.title}`}
              >
                Live
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
