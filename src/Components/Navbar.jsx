import React, { useState, useEffect } from "react";
import { logo } from "../Assets";
import { Link } from "react-router-dom";

const menuItems = [

];
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Listen for scroll events to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed z-20 top-0 left-0 transition-all duration-300 ${scrolling ? "bg-[#300034]" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="text-2xl  text-white">
              <img src={logo} alt="Logo" className="w-60" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
                >
                  {item.label}
                </a>
              ))}
              <Link to='https://monadscore.gitbook.io/monadscore' target="_blanks">
                <button
                  className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-[#E300F3] to-[#620268] text-white hover:from-[#620268] hover:to-[#E300F3] transition"
                >

                  Documentation
                </button>
              </Link>

            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#620268] text-white flex flex-col items-center space-y-4 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition"
                >
                  {item.label}
                </a>
              ))}
              <button
                className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-[#E300F3] to-[#620268] text-white hover:from-[#620268] hover:to-[#E300F3] transition"
              >
                Documentation
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;