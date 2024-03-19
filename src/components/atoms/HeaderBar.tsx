import { Manuale } from "next/font/google";

const manualeTitle = Manuale({
    weight : "600",
    subsets: ["latin"]
})
const HeaderBar = () => {
  return (
    <section className="h-16 w-screen pb-1 pt-3 text-center text-2xl  bg-cyan-400">
     <h1 className={manualeTitle.className}>pawprint</h1>
    </section>
  );
};
export default HeaderBar;
