'use client'

import { assets } from "../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("Submit now");

  const onSubmit = async () => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "07e2a6d2-f0b2-454a-8ed9-7ef5d60930e1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent.");
        event.currentTarget.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error, please try again.");
    }

    setTimeout(() => {
      setResult("Submit now");
    }, 5000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] max-w-[1980px] mx-auto py-10 scroll-mt-10 bg-footer bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me.
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mx-auto mt-5 mb-12 font-Ovo max-w-2xl"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        aria-label="Contact form"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            type="text"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/90"
            placeholder="Enter your name."
            name="name"
            required
            aria-label="Name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            type="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/90"
            placeholder="Enter your email."
            name="email"
            required
            aria-label="Email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkTheme dark:border-white/90"
          rows={6}
          placeholder="Enter your message"
          name="message"
          required
          aria-label="Message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="w-max flex items-center justify-between gap-2 rounded-full py-3 px-8 mx-auto bg-black/80 hover:bg-black text-white duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          type="submit"
          aria-live="polite"
          aria-busy={result === "Sending...."}
        >
          {result}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow icon"
            className="w-4"
          />
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
