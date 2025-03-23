import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const SpacedText = ({ text }: { text: string }) => {
  return (
    <p
      className={`${lato.className} text-center md:text-left select-none text-sm uppercase tracking-[2] font-normal text-[#000] group-hover:text-[#000000]`}
    >
      <span>{text}</span>
    </p>
  );
};
