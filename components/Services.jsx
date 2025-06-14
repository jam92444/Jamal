import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-10"
      aria-label="Services offered"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center mx-auto mt-5 mb-12 font-Ovo max-w-2xl"
      >
        I'm a frontend developer from California, USA with 10 years of
        experience working at companies like Apple, Tesla, and Microsoft.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.article
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white"
            tabIndex={0} // make focusable for keyboard
            aria-labelledby={`service-title-${index}`}
            aria-describedby={`service-desc-${index}`}
            onClick={() => window.open(link, "_blank")} // open link on click
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(link, "_blank");
              }
            }}
            role="link"
          >
            <Image src={icon} alt={`${title} icon`} className="w-10" />
            <h3
              id={`service-title-${index}`}
              className="text-lg my-4 text-gray-700 dark:text-white"
            >
              {title}
            </h3>
            <p
              id={`service-desc-${index}`}
              className="text-sm text-gray-600 leading-5 dark:text-white/80"
            >
              {description}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm mt-5 underline"
              onClick={(e) => e.stopPropagation()} // prevent triggering article click
              aria-label={`Read more about ${title}`}
            >
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
