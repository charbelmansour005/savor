"use client";
import React, { useEffect, useState } from "react";
import { Anton, Playfair_Display } from "next/font/google";
import { Search, Menu, ShoppingCart, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "./savor.png";
import { usePathname } from "next/navigation";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar2() {
  const pathname = usePathname();
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

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "Cocktails", url: "/cocktails" },
    { name: "Guide", url: "/guide" },
    // { name: "Who We Are", url: "/about" },
    { name: "Login / Sign Up", url: "/register" },
  ];

  return (
    <>
      <nav
        className={`bg-[#faeac8] text-black pt-6 sticky top-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto pl-0 pr-8 md:px-8">
          {/* Navbar Content */}
          <div className="flex items-center justify-between h-16">
            {/* Centered Logo Section */}
            <div className="flex-1 flex justify-start md:justify-center">
              <motion.a
                href="/"
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
                  width={180}
                  height={100}
                  alt="Logo"
                  className="select-none object-contain"
                />
              </motion.a>
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
            {navLinks.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: index / 30,
                  }}
                  key={index}
                  href={item.url}
                  className={`group select-none transition duration-200 relative ${
                    anton.className
                  } text-[15px] uppercase tracking-[0.5px] font-normal ${
                    index === 4 && "flex flex-row"
                  }`}
                >
                  {item.name}{" "}
                  {index === 4 ? (
                    <motion.div
                      transition={{
                        duration: 0.25,
                        delay: index / 30,
                        type: "spring",
                        stiffness: 50, // Controls the bounciness (higher = less bounce)
                        damping: 10, // Controls how fast the animation settles
                        mass: 0.75,
                      }}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                    >
                      <UserCircle className="w-5 h-5 cursor-pointer ml-2" />
                    </motion.div>
                  ) : (
                    <></>
                  )}
                  <span
                    className={`block h-[3px] ${
                      isActive ? `bg-[#000000]` : `bg-[#976c3b]`
                    } transition-all duration-200 ${
                      isActive ? "max-w-full" : "max-w-0 group-hover:max-w-full"
                    }`}
                  ></span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-40 flex justify-center items-center mt-20"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div className="bg-[#faeac8] w-full h-full p-6 flex flex-col items-start">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className={`${anton.className} text-4xl uppercase`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
