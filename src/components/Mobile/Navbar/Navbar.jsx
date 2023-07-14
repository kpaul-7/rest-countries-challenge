import { useDispatch, useSelector } from "react-redux";
import style from "./Navbar.module.css";
import { changeTheme } from "../../../store/slices/theme";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  const themeChangeHandler = () => {
    dispatch(changeTheme());
  };
  return (
    <div className={`${style.Navbar} ${themeClass}`}>
      <div className={style.Logo}>
        <p>Where is the world?</p>
      </div>
      <div className={style.ModeSelection} onClick={themeChangeHandler}>
        {theme === "Dark" ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
        <p>{theme === "Dark" ? "Light" : "Dark"} Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
