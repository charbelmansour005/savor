import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className={`${anton.className} text-white`}>
              Logo
            </a>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`relative ${anton.className} text-lg uppercase tracking-wide`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-col space-y-4 bg-gray-800 p-4">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`relative ${anton.className} text-lg uppercase tracking-wide text-center`}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
