"use client";
import "swiper/css/effect-fade";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { ProductItem } from "../product/ProductItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kit from "../kit-slider/kit.png";
import woodchips from "../kit-slider/wood-chips.png";
import woodchips2 from "../kit-slider/wood-chips-2.png";

export const KitSlider = () => {
  const [_, _setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full md:max-w-[80%] md:ml-auto">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
          768: {
            slidesPerView: 1, // Show 2 slides on tablet
          },
          820: {
            slidesPerView: 1, // Show 2 slides on tablet
          },
          1024: {
            slidesPerView: 2, // Show 3 slides on desktop
          },
          1460: {
            slidesPerView: 3, // Show 3 slides on desktop
          },
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={1}
        // slidesPerView={3}
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
          <ProductItem
            title="COCKTAIL SMOKER FULL KIT"
            description=" Upgrade your at-home bar with our Cocktail Smoking Kit, a must-have
          for connoisseurs and enthusiasts alike."
            image={kit}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            title="PREMIUM SMOKED APPLE WOOD CHIPS"
            description="Nature Wood: The flavor of wood chips is not from chemicals, pre soaked artificial flavor extracts or preservatives. Just put it on the stove, add wood chips and enjoy the smoky flavor."
            image={woodchips2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            title="COCKTAIL SMOKER FULL KIT"
            description=" Upgrade your at-home bar with our Cocktail Smoking Kit, a must-have
          for connoisseurs and enthusiasts alike."
            image={woodchips}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            title="COCKTAIL SMOKER FULL KIT"
            description=" Upgrade your at-home bar with our Cocktail Smoking Kit, a must-have
          for connoisseurs and enthusiasts alike."
            image={kit}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            title="COCKTAIL SMOKER FULL KIT"
            description=" Upgrade your at-home bar with our Cocktail Smoking Kit, a must-have
          for connoisseurs and enthusiasts alike."
            image={woodchips2}
          />
        </SwiperSlide>

        <div
          style={{ zIndex: 2 }}
          ref={nextRef}
          className="hidden md:flex absolute p-3 right-4 top-1/4 transform -translate-y-1/2 cursor-pointer p-1 bg-[#000] shadow-lg"
        >
          <ChevronRight color="white" size={30} />
        </div>
      </Swiper>
    </div>
  );
};
