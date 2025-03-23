"use client";
import Navbar2 from "@/components/navbar/navbar_2";
import { CustomSwiper } from "@/components/swiper/Swiper";
import { SpacedText } from "@/components/text/spacedText";
import { Options } from "@/components/ui/Options";
import { Colors } from "@/config/helper";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Navbar2 />
      <CustomSwiper />
      <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:pl-50">
        <SpacedText text="Our Collection" />
        <p
          className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-left`}
        >
          SAVOR COCKTAIL SMOKER
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="group mt-5 border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc] transition duration-300"
        >
          <p
            className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
          >
            <span>Shop now</span>
          </p>
        </motion.button>
      </div>
      <div className="pb-200"></div>
      {/* <div
        style={{ backgroundColor: Colors.sandDark }}
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <SpacedText text="hi" />
          <Options />
        </main>
      </div> */}
    </>
  );
}
