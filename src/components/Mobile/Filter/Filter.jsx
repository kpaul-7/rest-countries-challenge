import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filter.module.css";
import { changeRegion } from "../../../store/slices/region";
const Filter = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  const regionValue = useSelector((state) => state.region.regionName);
  const dispatch = useDispatch();
  const countryLists = [
    { id: 1, name: "Africa" },
    { id: 2, name: "America" },
    { id: 3, name: "Asia" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Oceania" },
  ];
  console.log(regionValue);
  return (
    <div className={`${style.Filter} ${themeClass}`}>
      <select
        value={regionValue}
        onChange={(e) => dispatch(changeRegion(e.target.value))}
      >
        <option value="none" disabled={true}>
          Filter by Region
        </option>
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
