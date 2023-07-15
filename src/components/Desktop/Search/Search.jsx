import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.css";
import { changeSearch } from "../../../store/slices/search";
const Search = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  const searchValue = useSelector((state) => state.search.country);
  return (
    <div className={`${style.Search} ${themeClass}`}>
      <div className={style.SearchDiv}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search for a country..."
          className={themeClass}
          value={searchValue}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Search;
