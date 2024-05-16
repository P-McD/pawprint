import { Manuale, Mandali } from "next/font/google";

const manualeRegular = Manuale({
  subsets: ["latin"],
  weight: "400",
});

const manualeMedium = Manuale({
  subsets: ["latin"],
  weight: "500",
});
const manualeSemiBold = Manuale({
  subsets: ["latin"],
  weight: "600",
});

const mandali = Mandali({
    subsets : ["latin"],
    weight: "400"
  })

type FontTitleType = {
  title: string;
  fontSize?: string;
};
//H1
export const H1Title = ({ title, fontSize = "text-[24px] lg:text-[26px]" }: FontTitleType) => {
    return <h1 className={`${manualeSemiBold.className} ${fontSize}`}>{title}</h1>;
  };

//H2
export const H2Title = ({ title, fontSize = "text-[20px] lg:text-[22px]" }: FontTitleType) => {
    return <h2 className={`${manualeMedium.className} ${fontSize}`}>{title.toUpperCase()}</h2>;
  };

//H2 XL
export const H2LargeTitle = ({ title, fontSize = "text-[24px] lg:text-[28px]" }: FontTitleType) => {
  return <h2 className={`${manualeRegular.className} ${fontSize}`}>{title.toUpperCase()}</h2>;
};

//H3
export const H3Title = ({ title, fontSize = "text-[18px] lg:text-[20px]"  }: FontTitleType) => {
  return <h3 className={`${manualeRegular.className} ${fontSize}`}>{title.toUpperCase()}</h3>;
};

//H4 (same styling as medium text)
export const H4Title = ({ title, fontSize = "text-[14px]" }: FontTitleType) => {
    return <h4 className={`${mandali.className} ${fontSize}`}>{title}</h4>;
  };
