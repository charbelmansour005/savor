// "use client";
// import Navbar2 from "@/components/navbar/navbar_2";
// import { CustomSwiper } from "@/components/swiper/Swiper";
// import { SpacedText } from "@/components/text/spacedText";
// import { Anton } from "next/font/google";
// import { motion } from "framer-motion";
// import { Lato } from "next/font/google";
// const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
// const anton = Anton({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function Home() {
//   return (
//     <>
//       <Navbar2 />
//       <CustomSwiper />
//       <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:pl-50">
//         <SpacedText text="Our Collection" />
//         <p
//           className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-left`}
//         >
//           SAVOR COCKTAIL SMOKER
//         </p>
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="group mt-5 border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#fff4dc] transition duration-300"
//         >
//           <p
//             className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#fff4dc] group-hover:text-[#000000]`}
//           >
//             <span>Shop now</span>
//           </p>
//         </motion.button>
//       </div>
//       <div className="pb-200"></div>
//     </>
//   );
// }

"use client";
import Navbar2 from "@/components/navbar/navbar_2";
import { CustomSwiper } from "@/components/swiper/Swiper";
import { SpacedText } from "@/components/text/spacedText";
import { Anton, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
import image1 from "../components/navbar/image1.jpeg";
import image2 from "../components/navbar/image2.jpeg";
import image3 from "../components/navbar/image3.webp";
import image4 from "../components/navbar/image4.jpg";
import Image from "next/image";
import { Options } from "@/components/ui/Options";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Navbar2 />
      <CustomSwiper />

      <div className="md:left-1/2 transform md:-translate-x-1/2 md:relative md:pl-50 pb-20">
        <SpacedText text="Our Collection" />
        <p
          className={`${anton.className} select-none uppercase text-2xl mt-5 text-center md:text-left`}
        >
          SAVOR COCKTAIL SMOKERS
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

      {/* Full Width Banner Section */}
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
      <section className="text-center mt-20 px-5">
        <h2 className={`${anton.className} text-3xl md:text-5xl uppercase`}>
          Why Choose Us?
        </h2>
        <ul className="mt-10 space-y-4">
          <li className={`${lato.className} text-lg`}>✔ Easy to Use</li>
          <li className={`${lato.className} text-lg`}>✔ Portable Design</li>
          <li className={`${lato.className} text-lg`}>
            ✔ Infuse Your Drinks with Flavor
          </li>
          <li className={`${lato.className} text-lg`}>✔ Durable and Stylish</li>
        </ul>
      </section>

      {/* <section className="bg-gray-100 py-20">
        <h2 className={`${anton.className} text-3xl text-center`}>
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-10 space-y-5 md:space-y-0 md:space-x-10">
          <div className="bg-white p-5 rounded shadow-md">
            <p className={`${lato.className} italic`}>
              “This smoker transformed my cocktail parties!”
            </p>
            <p className={`${lato.className} font-bold mt-2`}>- Alex R.</p>
          </div>
          <div className="bg-white p-5 rounded shadow-md">
            <p className={`${lato.className} italic`}>
              “Easy to use and produces amazing flavors!”
            </p>
            <p className={`${lato.className} font-bold mt-2`}>- Sarah L.</p>
          </div>
        </div>
      </section> */}

      <footer className="bg-black text-white text-center py-10 mt-20">
        <p className={`${lato.className}`}>
          © 2025 Savor Cocktail Smoker. All Rights Reserved.
        </p>
        <p className={`${lato.className}`}>Follow us on social media!</p>
      </footer>

      {/* <div className="pb-200"></div> */}
    </>
  );
}
