"use client";
import React, { useEffect, useState } from "react";
import { Anton, Playfair_Display } from "next/font/google";
import {
  Search,
  MapPin,
  User,
  Menu,
  ShoppingBag,
  ShoppingCart,
  UserIcon,
  UserCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "./savor.png";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar2() {
  const isAtTop = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`bg-[#fff4dc] text-black pt-${
          isAtTop ? 6 : 2
        } sticky top-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Navbar Content */}
          <div className="flex items-center justify-between h-16">
            {/* Centered Logo Section */}
            <div className="flex-1 flex justify-center">
              <motion.button
                initial={{ opacity: 0 }}
                whileTap={{ scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                className={`${playfair.className} cursor-pointer tracking-[7] uppercase text-center`}
              >
                {/* App Logo  */}
                <Image
                  style={{ objectFit: "contain", color: "black" }}
                  src={image}
                  width={200}
                  height={100}
                  alt="Logo"
                  className="select-none object-contain"
                />
              </motion.button>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 0.9 }}>
                <Search className="w-5 h-5 cursor-pointer" />
              </motion.div>
              {/* <motion.div whileHover={{ scale: 0.9 }}>
                <User className="w-5 h-5 cursor-pointer" />
              </motion.div> */}
              <motion.div whileHover={{ scale: 0.9 }}>
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
              </motion.div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <Menu
                className="w-5 h-5 cursor-pointer"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-center space-x-6 mt-4 flex-wrap">
            {[
              "Home",
              "Shop",
              "Cocktails",
              "Smoker Guide",
              "Who We Are",
              "Login / Sign Up",
            ].map((item, index) => (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 30,
                }}
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`group select-none transition duration-200 relative ${
                  anton.className
                } text-[15px] uppercase tracking-wide font-normal ${
                  index === 5 && "flex flex-row"
                }`}
              >
                {item}{" "}
                {index === 5 ? (
                  <motion.div whileHover={{ scale: 0.9 }}>
                    <UserCircle className="w-5 h-5 cursor-pointer ml-2" />
                  </motion.div>
                ) : (
                  <></>
                )}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-[3px] bg-[#ffdc64]"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-40 flex justify-center items-center mt-20"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div className="bg-white w-full h-full p-6 flex flex-col items-start">
            <h2 className={`${anton.className} text-xl mb-4`}>Menu</h2>
            <div className="flex flex-col space-y-4">
              {[
                "Home",
                "Shop",
                "Cocktails",
                "Smoker Guide",
                "Login / Sign Up",
                "About Us",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className={`${anton.className} text-md uppercase`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
