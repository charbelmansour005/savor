"use client";
import Navbar2 from "@/components/navbar/NavBar2";
import { Anton, Playfair_Display, Lato } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your images
import step1 from "@/public/images/1.jpg";
import step2 from "@/public/images/2.jpg";
import step3 from "@/public/images/3.jpg";
import step4 from "@/public/images/4.jpg";
import { SpacedText } from "@/components/text/spacedText";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const anton = Anton({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Guide() {
  return (
    <>
      <Navbar2 />
      <div className="md:left-1/2 transform md:-translate-x-1/2 md:relative md:pl-50 pb-8 md:pb-20">
        <SpacedText text="EASY TO USE" />
        <p
          className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-left`}
        >
          Our Quick Guide
        </p>
      </div>
      <section className="flex justify-center max-w-7xl mx-auto px-4 sm:px-8 md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
          {[step1, step2, step3, step4].map((step, index) => (
            <Image
              key={index}
              src={step}
              alt={`Step ${index + 1}`}
              width={400}
              height={300}
              quality={100}
              priority
              className="w-auto h-auto object-contain"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-10 mt-20">
        <p className={`${lato.className}`}>
          © 2025 Savor Cocktail Smoker. All Rights Reserved.
        </p>
        <p className={`${lato.className}`}>Follow us on social media!</p>
      </footer>
    </>
  );
}
