"use client";
import { assets } from "../assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkmode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <div className="bg-white sm:bg-transparent max-w-[1980px]">
      <div className="fixed opacity-50 top-0 left-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          className="w-full"
          alt="Decorative header background"
          priority
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <a href="#top" aria-label="Go to top of page">
          <Image
            src={isDarkmode ? assets.logo_dark : assets.logo}
            alt="Md. Yusuf Jamal logo"
            className="w-48 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            !isScroll
              ? "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:background-transparent"
              : ""
          }`}
          role="menubar"
        >
          {menuItems
            .filter((item) => item.name !== "Services")
            .map(({ name, href }) => (
              <li key={name} role="none">
                <a
                  className="font-Ovo cursor-pointer"
                  href={href}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={0}
                >
                  {name}
                </a>
              </li>
            ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            aria-label={`Switch to ${isDarkmode ? "light" : "dark"} mode`}
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="focus:outline-none"
          >
            <Image
              src={isDarkmode ? assets.sun_icon : assets.moon_icon}
              alt={
                isDarkmode
                  ? "Sun icon for light mode"
                  : "Moon icon for dark mode"
              }
              className="w-6"
            />
          </button>

          <a
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo cursor-pointer dark:border-white/50"
            href="#contact"
            onClick={closeMenu}
            role="button"
            tabIndex={0}
          >
            Contact me
            <Image
              src={isDarkmode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow icon"
              className="w-3"
            />
          </a>

          <button
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={openMenu}
            className="block md:hidden focus:outline-none"
          >
            <Image
              src={isDarkmode ? assets.menu_white : assets.menu_black}
              alt="Menu icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-4 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white"
          style={{ transform: "translateX(16rem)" }}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div
            onClick={closeMenu}
            className="absolute top-6 right-6 cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={(e) => e.key === "Enter" && closeMenu()}
          >
            <Image
              src={isDarkmode ? assets.close_white : assets.close_black}
              alt="Close menu icon"
              className="w-5"
            />
          </div>

          {menuItems.map(({ name, href }) => (
            <li key={name} role="none">
              <a
                className="font-Ovo cursor-pointer"
                href={href}
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
