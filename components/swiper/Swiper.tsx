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
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SpacedButton } from "../buttons/spacedButton";

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
              src={image1}
              alt="Slide 1"
              className="object-cover w-full h-full select-none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[750px]">
            <Image
              src={image2}
              alt="Slide 2"
              className="object-cover w-full h-full select-none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[750px]">
            <Image
              src={image3}
              alt="Slide 3"
              className="object-cover w-full h-full select-none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[750px]">
            <Image
              src={image4}
              alt="Slide 4"
              className="object-cover w-full h-full select-none"
            />
          </div>
        </SwiperSlide>
        <div
          style={{ zIndex: 2 }}
          ref={prevRef}
          className="absolute p-3 left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1 bg-[#000] shadow-lg"
        >
          <ChevronLeft color="white" size={30} />
        </div>
        <div
          style={{ zIndex: 2 }}
          ref={nextRef}
          className="absolute p-3 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1 bg-[#000] shadow-lg"
        >
          <ChevronRight color="white" size={30} />
        </div>

        <SpacedButton
          text={"Craft Exceptional Cocktails with Smoky Infusions"}
        />
      </Swiper>
    </div>
  );
};
