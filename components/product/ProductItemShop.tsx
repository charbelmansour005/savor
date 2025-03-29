import Image from "next/image";
import { Anton, Lato, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const ProductItemShop = ({
  image,
  title,
  description,
  actionTitle = "Shop now",
  price,
}: {
  image: any;
  title: string;
  description: string;
  actionTitle?: string;
  price?: string;
}) => {
  return (
    <section className="py-10 md:py-20 flex justify-center px-4 sm:px-8">
      <div className="flex flex-col justify-between h-full max-w-lg w-full">
        <div>
          {/* Responsive Image Container */}
          <div className="flex justify-center">
            <Image
              src={image}
              height={200}
              width={350}
              alt="always add alt"
              style={{ objectFit: "contain", maxWidth: 350, maxHeight: 250 }}
            />
          </div>

          {/* Title */}
          <p
            className={`${anton.className} select-none uppercase text-xl md:text-2xl mt-5 text-center md:text-start`}
          >
            {title}
          </p>

          {/* Description */}
          <p
            className={`${playfair.className} mx-auto md:mx-0 h-[70px] text-center md:text-start font-normal text-base text-sm pt-2 text-[#000] leading-relaxed`}
          >
            {description}
          </p>

          {/* Price */}
          <p
            className={`${lato.className} text-lg md:text-xl font-semibold text-[#000] text-center md:text-start mt-2`}
          >
            ${price}
          </p>
        </div>

        {/* Responsive Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="group mt-5 border-1 cursor-pointer py-3 px-6 sm:px-10 bg-[#000] hover:bg-[#faeac8] transition duration-150 w-full max-w-[380px] mx-auto md:mx-0"
        >
          <p
            className={`${lato.className} text-sm sm:text-base text-center uppercase tracking-widest font-normal text-[#faeac8] group-hover:text-[#000000]`}
          >
            {actionTitle}
          </p>
        </motion.button>
      </div>
    </section>
  );
};
