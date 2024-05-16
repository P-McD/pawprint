import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { H1Title, H3Title } from "../bosons/TitleStyles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavBar = () => setIsMenuOpen(!isMenuOpen);
  const headerCategories = [
    { title: "new in", linkTo: "/new-in" },
    { title: "ready-to-wear", linkTo: "/ready-to-wear" },
    { title: "jewellery", linkTo: "/jewellery" },
    { title: "accessories", linkTo: "/accessories" },
  ];
  return (
    <nav className="max-h-24 min-h-24 w-screen shadow-xl">
      <div className="grid grid-cols-4 grid-flow-col grid-rows-1 md:flex w-full justify-center px-4 py-2 2xl:px-16">
      <div onClick={handleNavBar} className="col-span-1 md:hidden lg:hidden">
        <MenuOutlinedIcon />
      </div>
      <div className="col-span-1 col-start-4 align-self-center justify-self-end md:hidden lg:hidden">
        <ShoppingBagOutlinedIcon />
      </div>
        <Link className="col-span-2 col-start-2 justify-self-center md:flex" href="/">
          <H1Title title="pawprint" />
        </Link>

      </div>
      <div className="hidden grid-cols-12 justify-center gap-[24px] pb-4 md:grid">
        <Link
          className="col-span-2 col-start-3 justify-self-center hover:border-b duration-500 ease-in"
          href="/new-in"
        >
          <H3Title title="New in" />
        </Link>
        <Link
          className="col-span-2 col-start-5 justify-self-center"
          href="/ready-to-wear"
        >
          <H3Title title="Ready-to-wear" />
        </Link>
        <Link
          className="col-span-2 col-start-7 justify-self-center"
          href="/jewellery"
        >
          <H3Title title="Jewellery" />
        </Link>
        <Link
          className="col-span-2 col-start-9 justify-self-center"
          href="/accessories"
        >
          <H3Title title="Accessories" />
        </Link>
      </div>
      
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 h-full w-[65%] z-30 bg-warmGrey p-10 duration-500 ease-in md:hidden"
            : "fixed left-[-100%] h-full top-0 z-30 w-[65%] p-10 duration-500 ease-in md:hidden"
        }
      >
        <div className="flex w-full items-center justify-start flex-col py-6">
          <div className="flex-col py-6"> 
            <div onClick={handleNavBar} className="cursor-pointer py-2">
              <CloseIcon />
            </div>
            <div className="py-4">
              <Link href="/">
                <div onClick={() => setIsMenuOpen(false)} />
                HOME
              </Link>
            </div>
            {headerCategories.map((category) => {
              return (
                <div key={category.title} className="py-4">
                  <Link href={category.linkTo}>
                    <div onClick={() => setIsMenuOpen(false)} />
                    {category.title.toUpperCase()}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HeaderBar;

{
  /* <div className="flex w-full justify-center px-4 py-4 2xl:px-16">
<Link href="/">
  <H1Title title="pawprint" />
</Link>
</div>
<div className="grid grid-cols-12 justify-center gap-[24px] pb-4">
{categories.map((category, index) => {
return (<CategoryItem key={category.title} title={category.title} linkTo={category.linkTo} index={index} />)
})}
</div> */
}
