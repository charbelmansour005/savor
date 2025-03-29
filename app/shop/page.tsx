"use client";
import Navbar2 from "@/components/navbar/NavBar2";
import { Anton, Playfair_Display, Lato } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your images
import woodchips2 from "../../components/kit-slider/wood-chips-2.png";
import item3 from "../../components/kit-slider/wood-chips.png";
import item4 from "../../components/kit-slider/kit.png";
import { ProductItemShop } from "@/components/product/ProductItemShop";
import { useState } from "react";
import CustomDropdown from "@/components/dropdown/CustomDropDown";
import FilterSidebar from "@/components/filter-sidebar/FilterSidebar";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const anton = Anton({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Shop() {
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Example product data
  const products = [
    {
      title: "COCKTAIL SMOKER FULL KIT",
      description: "Upgrade your at-home bar with our Cocktail Smoking Kit.",
      image: woodchips2,
      price: "49.99",
      category: "Kits",
      available: true,
    },
    {
      title: "COCKTAIL SMOKER FULL KIT",
      description: "A must-have for connoisseurs and enthusiasts.",
      image: item3,
      price: "39.99",
      category: "Accessories",
      available: false,
    },
    {
      title: "COCKTAIL SMOKER FULL KIT",
      description: "Perfect for crafting unique cocktails.",
      image: item4,
      price: "59.99",
      category: "Premium",
      available: true,
    },
    {
      title: "COCKTAIL SMOKER FULL KIT",
      description: "Enhance your mixology skills with this kit.",
      image: woodchips2,
      price: "29.99",
      category: "Kits",
      available: true,
    },
  ];

  // Filter logic
  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (priceRange === "Under 40" && parseFloat(product.price) >= 40)
      return false;
    if (
      priceRange === "40-50" &&
      (parseFloat(product.price) < 40 || parseFloat(product.price) > 50)
    )
      return false;
    if (priceRange === "Above 50" && parseFloat(product.price) <= 50)
      return false;
    if (availableOnly && !product.available) return false;
    return true;
  });

  return (
    <>
      <Navbar2 />

      <section className="flex max-w-7xl mx-auto px-4 sm:px-8 md:mt-10">
        {/* Left Sidebar Filter */}
        <FilterSidebar
          setAvailableOnly={setAvailableOnly}
          setPriceRange={setPriceRange}
          availableOnly={availableOnly}
        />

        {/* Products Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductItemShop
                key={index}
                actionTitle="Add To Cart"
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))
          ) : (
            <p className="col-span-2 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-10 mt-20">
        <p className={`${lato.className}`}>
          © 2025 Savor Cocktail Smoker. All Rights Reserved.
        </p>
        <p className={`${lato.className}`}>Follow us on social media!</p>
      </footer>
    </>
  );
}
