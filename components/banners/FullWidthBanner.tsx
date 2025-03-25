import Image from "next/image";
import image2 from "../navbar/image2.jpeg";
import { Anton, Lato, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const FullWidthBanner = () => {
  return (
    <section className="relative w-full h-188 bg-cover bg-center">
      <div className="absolute -z-10 inset-0">
        <Image
          src={image2}
          alt="always add alt"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex-col items-center justify-center h-full px-10 py-10 md:px-50 md:py-50">
        <h1
          className={`${lato.className} text-center md:text-start text-sm tracking-[4] uppercase text-[#fff4dc]`}
        >
          Follow Your Flavour
        </h1>

        <h1
          className={`${anton.className} pt-10 text-7xl text-[#fff4dc] text-center md:text-start`}
        >
          COCKTAILS MADE FOR YOU
        </h1>

        <p
          className={`${playfair.className} text-start font-normal text-sm pt-10 md:w-150 text-[#fff4dc]`}
        >
          There are cocktails, and then there are cocktail smoker recipes: a
          bold twist that transforms classics into unforgettable favorites.
          Whatever flavors you crave, there's a smoky delight waiting for you.
        </p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="group mt-10 border-1 cursor-pointer py-4 px-20 bg-[#fff4dc] hover:bg-[#000] transition duration-300"
        >
          <p
            className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#000000] group-hover:text-[#fff4dc]`}
          >
            <span>Cocktail Recipes</span>
          </p>
        </motion.button>
      </div>
    </section>
  );
};
