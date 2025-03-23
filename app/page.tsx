"use client";
import "swiper/css/effect-fade";
import "swiper/css";
import { Playfair_Display } from "next/font/google";
import { Anton } from "next/font/google";
import { Lato } from "next/font/google";
import { Colors } from "@/config/helper";
import Navbar2 from "@/components/navbar/navbar_2";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import image1 from "../components/navbar/image1.jpeg";
import image2 from "../components/navbar/image2.jpeg";
import image3 from "../components/navbar/image3.webp";
import image4 from "../components/navbar/image4.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

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

export default function Home() {
  const swiper = useSwiper();

  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Navbar2 />
      <div className="relative">
        <Swiper
          autoplay={{ delay: 3500 }}
          loop={true}
          effect="fade"
          modules={[Navigation, EffectFade, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="my-5"
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center items-center h-[750px]">
              <Image
                src={image1} // Replace with your image path
                alt="Slide 1"
                className="object-cover w-full h-full select-none"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[750px]">
              <Image
                src={image2} // Replace with your image path
                alt="Slide 2"
                className="object-cover w-full h-full select-none"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[750px]">
              <Image
                src={image3} // Replace with your image path
                alt="Slide 3"
                className="object-cover w-full h-full select-none"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[750px]">
              <Image
                src={image4} // Replace with your image path
                alt="Slide 4"
                className="object-cover w-full h-full select-none"
              />
            </div>
          </SwiperSlide>
          <div
            style={{ zIndex: 2, opacity: 0.6 }}
            ref={prevRef}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1 bg-[#ede3cc] rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <ArrowLeft size={15} />
          </div>
          <div
            style={{ zIndex: 2, opacity: 0.6 }}
            ref={nextRef}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1 bg-[#ede3cc] rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <ArrowRight size={15} />
          </div>
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
            className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-15 md:left-85 group border cursor-pointer py-2 px-2 bg-[#000] hover:bg-[#ede3cc] transition duration-300"
          >
            <p
              className={`${lato.className} select-none text-sm uppercase tracking-[2] font-normal text-[#ede3cc] group-hover:text-[#000000]`}
            >
              <span>Craft Exceptional Cocktails with Smoky Infusions</span>
            </p>
          </motion.button>
        </Swiper>
      </div>
      {/* Swiper end */}

      <div
        style={{ backgroundColor: Colors.sandDark }}
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className={`${playfair.className} font-bold`}>
            This is Bold (700)
          </h1>
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
            className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#ede3cc] transition duration-300"
          >
            <p
              className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#ede3cc] group-hover:text-[#000000]`}
            >
              <span>Shop now</span>
            </p>
          </motion.button>
          <a href="#" className="group text-sky-600 transition duration-300">
            Link
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </a>

          <h1 className={`${playfair.className} font-bold`}>
            This is Bold (700)
          </h1>
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
            className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#ede3cc]"
          >
            <p
              className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#ede3cc] group-hover:text-[#000000]`}
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
            className="group border-1 cursor-pointer py-4 px-20 bg-[#000] hover:bg-[#ede3cc]"
          >
            <p
              className={`${lato.className} text-sm uppercase tracking-[5] font-normal text-[#ede3cc] group-hover:text-[#000000]`}
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
        </main>
      </div>
    </>
  );
}
