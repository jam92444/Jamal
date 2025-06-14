import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkmode }) => {
  return (
    <footer className="mt-20 max-w-[1980px] mx-auto">
      <div className="text-center">
        <Image
          src={isDarkmode ? assets.logo_dark : assets.logo}
          alt="Md. Yusuf Jamal Logo"
          className="w-48 mx-auto mb-2"
          priority
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkmode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email icon"
            className="w-6"
          />
          <a
            href="mailto:mdyusufwork@gmail.com"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            mdyusufwork@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Md. Yusuf Jamal. All rights reserved.</p>
        <ul
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
          aria-label="Social media links"
        >
          <li>
            <a
              href="https://www.github.com/jam92444"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-yusuf-jamal-106772293/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918825512668"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
