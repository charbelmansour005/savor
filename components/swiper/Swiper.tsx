"use client";
import "swiper/css/effect-fade";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";
import image1 from "../navbar/image1.jpeg";
import image2 from "../navbar/image2.jpeg";
import image3 from "../navbar/image3.webp";
import image4 from "../navbar/image4.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const CustomSwiper = () => {
  const [_, _setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
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
  );
};
