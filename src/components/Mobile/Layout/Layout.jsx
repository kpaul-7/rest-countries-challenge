import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import style from "./Layout.module.css";
import Countries from "../Countries/Countries";
const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  return (
    <div className={`${style.Layout} ${themeClass}`}>
      <Navbar />
      <Search />
      <Filter />
      <Countries />
    </div>
  );
};

export default Layout;
