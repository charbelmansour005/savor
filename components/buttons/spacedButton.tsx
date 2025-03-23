import { motion } from "framer-motion";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const SpacedButton = ({
  text,
  action,
}: {
  text: string;
  action?: () => void;
}) => {
  return (
    <motion.button
      style={{ zIndex: 2, maxWidth: 300 }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-15 md:left-85 group border cursor-pointer py-2 px-2 bg-[#000] hover:bg-[#fff4dc] transition duration-300"
    >
      <p
        className={`${lato.className} select-none text-sm uppercase tracking-[3] leading-4 font-normal text-[#fff4dc] group-hover:text-[#000000]`}
      >
        <span>{text}</span>
      </p>
    </motion.button>
  );
};
