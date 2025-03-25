"use client";
import "swiper/css/effect-fade";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const Testimonials = () => {
  const [_, _setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <Swiper
        autoplay={{ delay: 3500 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        effect="slide"
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
          768: {
            slidesPerView: 2, // Show 2 slides on tablet
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on desktop
          },
        }}
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
          <div className="mx-5 md:mx-0 p-10 border-1 border-[#e8debd]">
            <p className={`${lato.className} italic`}>
              “This smoker transformed my cocktail parties!”
            </p>
            <p className={`${lato.className} font-bold mt-2`}>- Alex R.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 md:mx-0 p-10 border-1 border-[#e8debd]">
            <p className={`${lato.className} italic`}>
              “Easy to use and produces amazing flavors!”
            </p>
            <p className={`${lato.className} font-bold mt-2`}>- Sarah L.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 md:mx-0 p-10 border-1 border-[#e8debd]">
            <p className={`${lato.className} italic`}>“Great work.”</p>
            <p className={`${lato.className} font-bold mt-2`}>- Alex R.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 md:mx-0 p-10 border-1 border-[#e8debd]">
            <p className={`${lato.className} italic`}>
              “Easy to use and produces amazing flavors!”
            </p>
            <p className={`${lato.className} font-bold mt-2`}>- Sarah L.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
