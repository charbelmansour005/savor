import Image from "next/image";
import { Anton, Lato, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const ProductsSliderItem = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <section className="md:py-20 flex justify-center">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div style={{ height: 350 }} className="flex flex-row justify-center">
            <Image
              src={image}
              height={350}
              alt="always add alt"
              style={{ objectFit: "contain", maxWidth: 350 }}
            />
          </div>
          <p
            className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-start`}
          >
            {title}
          </p>
          <p
            style={{ height: 130 }}
            className={`${playfair.className} mx-5 md:mx-0 text-center md:text-start font-normal text-sm pt-2 md:w-100 text-[#000]`}
          >
            {description}
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex flex-row justify-center group mt-5 border-1 cursor-pointer py-4 px-27 bg-[#000] hover:bg-[#faeac8] transition duration-150 w-[380px]"
        >
          <p
            className={`${lato.className} text-sm text-center uppercase tracking-[5] font-normal text-[#faeac8] group-hover:text-[#000000]`}
          >
            Shop now
          </p>
        </motion.button>
      </div>
    </section>
  );
};
