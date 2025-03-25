import { Anton, Lato } from "next/font/google";
import { motion } from "framer-motion";
import { SpacedText } from "../text/spacedText";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const MiniIntro = () => {
  return (
    <div className="md:left-1/2 transform md:-translate-x-1/2 md:relative md:pl-50 pb-20">
      <SpacedText text="Our Collection" />
      <p
        className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-left`}
      >
        SAVOR COCKTAIL SMOKERS & KIT
      </p>
      <div className="flex justify-center md:hidden">
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

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex group mt-5 border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc] transition duration-300"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
    </div>
  );
};
