import React from "react";
import { useSelector } from "react-redux";
import style from "./Filter.module.css";
const Filter = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  const countryLists = [
    { id: 1, name: "Africa" },
    { id: 2, name: "America" },
    { id: 3, name: "Asia" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Oceania" },
  ];
  return (
    <div className={`${style.Filter} ${themeClass}`}>
      <select>
        {countryLists.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
