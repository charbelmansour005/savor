import { Lato } from "next/font/google";
import { Colors } from "@/config/helper";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Anton } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const text = "Framer Motion is a really cool tool".split(" ");

export const Options = () => {
  return (
    <>
      <h1 className={`${playfair.className} font-bold`}>This is Bold (700)</h1>
      <p className={`${playfair.className} font-normal`}>
        This is Regular (400)
      </p>
      <p className={anton.className}>This paragraph uses anton.</p>
      <h1 className={`${lato.className} tracking-[4]`}>
        This is Lato with wide letter spacing
      </h1>
      <div style={{ flexDirection: "row" }}>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc] transition duration-300"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
      <a href="#" className="group text-sky-600 transition duration-300">
        Link
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </a>

      <h1 className={`${playfair.className} font-bold`}>This is Bold (700)</h1>
      <p className={`${playfair.className} font-normal`}>
        This is Regular (400)
      </p>
      <p className={anton.className}>This paragraph uses anton.</p>
      <h1 className={`${lato.className} tracking-[4]`}>
        This is Lato with wide letter spacing
      </h1>
      <div style={{ flexDirection: "row" }}>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      <motion.button
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
        className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc]"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
      <motion.button
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
        className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc]"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
      <motion.button
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
        className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc]"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
      <motion.button
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
        className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc]"
      >
        <p
          className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
        >
          <span>Shop now</span>
        </p>
      </motion.button>
    </>
  );
};
