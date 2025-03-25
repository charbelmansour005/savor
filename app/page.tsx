"use client";
import Navbar2 from "@/components/navbar/NavBar2";
import { CustomSwiper } from "@/components/swiper/Swiper";
import { SpacedText } from "@/components/text/spacedText";
import { Anton, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
import image2 from "../components/navbar/image2.jpeg";
import kit from "../components/kit-slider/kit.png";
import Image from "next/image";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { MiniIntro } from "@/components/mini-intro/Mini-Intro";
import { ProductsSliderItem } from "@/components/product/ProductsSliderItem";
import { FullWidthBanner } from "@/components/banners/FullWidthBanner";
import { KitSlider } from "@/components/kit-slider/KitSlider";
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
      <MiniIntro />
      <KitSlider />
      <FullWidthBanner />

      <section className="py-20 md:mx-50">
        <h2 className={`${anton.className} text-3xl text-center`}>
          What Our Customers Say
        </h2>
        <Testimonials />
      </section>
      <div className="pb-200"></div>

      <footer className="bg-black text-white text-center py-10 mt-20">
        <p className={`${lato.className}`}>
          © 2025 Savor Cocktail Smoker. All Rights Reserved.
        </p>
        <p className={`${lato.className}`}>Follow us on social media!</p>
      </footer>
    </>
  );
}
