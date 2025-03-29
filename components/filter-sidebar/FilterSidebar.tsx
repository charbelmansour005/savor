import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "../dropdown/CustomDropDown";
import { Anton, Playfair_Display } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FilterSidebar({
  setPriceRange,
  availableOnly,
  setAvailableOnly,
}: {
  setPriceRange: (args?: any) => void;
  availableOnly: any;
  setAvailableOnly: (args?: any) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:block w-1/4 pr-8">
        <div className="p-5 border-1 border-[#e8debd]">
          <h2 className={`${anton.className} text-lg uppercase mb-4`}>
            Filters
          </h2>

          <CustomDropdown setPriceRange={setPriceRange} />

          {/* Price Range Filter */}
          <CustomDropdown setPriceRange={setPriceRange} />

          {/* Availability Filter */}
          <div className="flex items-center mt-5">
            {/* Toggle Switch */}
            <label htmlFor="availableOnly" className="relative cursor-pointer">
              <input
                type="checkbox"
                id="availableOnly"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-black transition duration-200 relative">
                <div
                  className="absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-200"
                  style={{
                    transform: availableOnly
                      ? "translateX(18px)"
                      : "translateX(0)",
                  }}
                ></div>
              </div>
            </label>

            {/* Label */}
            <label
              htmlFor="availableOnly"
              className={`${playfair.className} text-sm ml-3 cursor-pointer`}
            >
              In Stock Only
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}
