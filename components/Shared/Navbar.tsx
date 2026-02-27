"use client";

import Image from "next/image";
import logo from "@/public/Images/Logo.png";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { motion, useReducedMotion } from "framer-motion";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full px-4 pb-5 pt-6 max-w-screen-xl mx-auto text-gray-200 font-poppins z-50 sticky top-0 rounded-md backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-black/70" : "bg-black/30"
      }`}
      aria-label="Main navigation"
    >
      {/* Left Section */}
      <div className="flex justify-between items-center">
        <a href="#home">
          <Image
            src={logo}
            alt="Tech Plato Logo"
            height={100}
            width={150}
            className="logo-glow"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {
            open ? <RxCross2 className="text-3xl" /> : <HiMiniBars3BottomRight className="text-3xl" />
          }
        </button>

        {/* Desktop Menu */}
        <ul className="navbar hidden lg:flex space-x-10 items-center">
          <li>
            <a
              href="#home"
              className="text-white text-lg font-semibold relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-200
                hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutUs"
              className="text-white text-lg font-semibold relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-200
                hover:after:w-full"
            >
              About
            </a>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative group cursor-pointer text-lg font-semibold">
            <span className="text-white flex items-center gap-2 group relative
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-white
              after:transition-all after:duration-200
              group-hover:after:w-full">
              Brands <IoIosArrowDown className="transform transition-transform duration-200 ease-in-out group-hover:rotate-180" />
            </span>

            <ul
              className="absolute right-0 mt-2 bg-[#0D1229]/95 backdrop-blur-md border border-white/10 text-white shadow-lg shadow-black/30 rounded-md p-3 w-40
    opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
            >
              <li className="py-1">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.techplato.agency"
                  className="relative inline-block text-white/70
               transition-colors duration-200
               hover:text-white
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[2px] after:w-0 after:bg-white
               after:transition-all after:duration-200
               hover:after:w-full"
                >
                  Agency
                </a>
              </li>

              <li className="py-1">
                <a rel="noopener noreferrer" target="_blank" href="https://www.condro.ca" className="relative inline-block text-white/70
               transition-colors duration-200
               hover:text-white
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[2px] after:w-0 after:bg-white
               after:transition-all after:duration-200
               hover:after:w-full">Condro</a>
              </li>
              <li className="py-1">
                <a rel="noopener noreferrer" target="_blank" href="https://www.flowbites.com" className="relative inline-block text-white/70
               transition-colors duration-200
               hover:text-white
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[2px] after:w-0 after:bg-white
               after:transition-all after:duration-200
               hover:after:w-full">FlowBites</a>
              </li>
            </ul>
          </li>

          {/* Contact as styled button */}
          <li>
            <a
              href="#contact"
              className="btn-primary text-sm py-2 px-5"
              aria-label="Go to contact section"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden mt-4 bg-[#0D1229]/95 backdrop-blur-md border border-white/10 text-white rounded-md p-4 shadow-lg shadow-black/30 space-y-3">
          <a href="#home" className="block text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#aboutUs" className="block text-white/70 hover:text-white transition-colors">About</a>
          <a href="#contact" className="block font-semibold text-[#6D5BFF]">Contact Us</a>

          {/* Mobile dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer text-white/70">Brands</summary>

            <ul className="ml-4 pl-2.5 mt-2 space-y-2 border-l-2 border-white/20">
              <li>
                <a href="https://www.techplato.agency" className="block text-white/70 hover:text-white transition-colors">Agency</a>
              </li>
              <li>
                <a href="https://www.condro.ca" className="block text-white/70 hover:text-white transition-colors">Condro</a>
              </li>
              <li>
                <a href="https://www.flowbites.com" className="block text-white/70 hover:text-white transition-colors">FlowBites</a>
              </li>
            </ul>
          </details>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
