import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lato, Playfair_Display } from "next/font/google";

const priceOptions = [
  { label: "All", value: "" },
  { label: "Under $40", value: "Under 40" },
  { label: "$40 - $50", value: "40-50" },
  { label: "Above $50", value: "Above 50" },
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function CustomDropdown({
  setPriceRange,
}: {
  setPriceRange: (value: string | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(priceOptions[0]); // Default option

  const handleSelect = (option: any) => {
    setSelected(option);
    setPriceRange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mt-4">
      <h3 className={`${playfair.className} text-black`}>Price</h3>

      {/* Selected Item Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full p-2 text-left border border-[#e8debd] flex justify-between items-center"
      >
        <span className={`${lato.className} text-sm`}>{selected.label}</span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-1 bg-[#faeac8] border border-[#e8debd] shadow-2xl z-10"
          >
            {priceOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`${lato.className} p-3 hover:bg-[#faeac8] cursor-pointer transition duration-200`}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
