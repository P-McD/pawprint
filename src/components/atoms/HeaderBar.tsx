import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { H1Title } from "../bosons/TitleStyles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const HeaderBar = () => {
  return (
    <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between h-16 w-screen pl-5 pr-5 pb-1 pt-3">
      <MenuOutlinedIcon />
      <H1Title title="pawprint" />
      <ShoppingBagOutlinedIcon />
    </section>
  );
};
export default HeaderBar;
