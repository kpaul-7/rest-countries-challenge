import { useSelector } from "react-redux";
import style from "./Search.module.css";
const Search = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  return (
    <div className={`${style.Search} ${themeClass}`}>
      <div className={style.SearchDiv}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search for a country..."
          className={themeClass}
        />
      </div>
    </div>
  );
};

export default Search;
