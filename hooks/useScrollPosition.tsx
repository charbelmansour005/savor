import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Check if the scroll position is at the top
        setIsAtTop(window.scrollY === 0);
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return isAtTop;
};
