import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { H1Title, H2Title, H3Title, H4Title } from "../bosons/TitleStyles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import { useState } from "react";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const handleNavBar = () => setIsMenuOpen(!isMenuOpen)
  const headerCategories = [
    { title: "new in", linkTo: "/new-in" },
    { title: "eveningwear", linkTo: "/eveningwear" },
    { title: "jewellery", linkTo: "/jewellery" },
    { title: "accessories", linkTo: "/accessories" },
  ];
  return (
    // <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between h-16 fixed w-full pl-5 pr-5 pb-1 pt-3">
    //   <MenuOutlinedIcon />
    //<H1Title title="pawprint" />
    //   <ShoppingBagOutlinedIcon />
    // </section>

    // <nav className="fixed h-24 w-screen shadow-xl">
    //   <div className="flex h-[75%] w-full justify-center py-4 px-4 2xl:px-16">
    //     <Link href="/">
    //       <H1Title title="pawprint" />
    //     </Link>
    //   </div>
    //   <div className="flex h-[25%] w-full items-center justify-between px-4 2xl:px-16">
    //     <ul className= "hidden sm:flex">
    //       <Link href="/new-in">
    //         <li className="ml-10"><H3Title title="New in"/></li>
    //       </Link>
    //     </ul>
    //   </div>
    // </nav>
    // <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between h-16 fixed w-full pl-5 pr-5 pb-1 pt-3">
    //   <MenuOutlinedIcon />
    //<H1Title title="pawprint" />
    //   <ShoppingBagOutlinedIcon />
    // </section>

    <nav className="min-h-24 max-h-24 w-screen shadow-xl">
      <div className="flex w-full justify-center px-4 py-2 2xl:px-16">
        <Link href="/">
          <H1Title title="pawprint" />
        </Link>
      </div>
      <div className="hidden md:grid grid-cols-12 justify-center gap-[24px] pb-4">
        <Link
          className="col-span-2 col-start-3 justify-self-center"
          href="/new-in"
        >
          <H3Title title="New in" />
        </Link>
        <Link
          className="col-span-2 col-start-5 justify-self-center"
          href="/eveningwear"
        >
          <H3Title title="Eveningwear" />
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
        <div onClick={handleNavBar} className="sm:grid md:hidden lg:hidden">
          <MenuOutlinedIcon />
      </div>
      <div className={ isMenuOpen ? "fixed left-0 top-0 w-[65%] md:hidden p-10 ease-in duration-500 bg-warmGrey" : "fixed left-[-100%] top-0 w-[65%] md:hidden p-10 ease-in duration-500" }>hi</div>

    </nav>
  );
};
export default HeaderBar;


{/* <div className="flex w-full justify-center px-4 py-4 2xl:px-16">
<Link href="/">
  <H1Title title="pawprint" />
</Link>
</div>
<div className="grid grid-cols-12 justify-center gap-[24px] pb-4">
{categories.map((category, index) => {
return (<CategoryItem key={category.title} title={category.title} linkTo={category.linkTo} index={index} />)
})}
</div> */}