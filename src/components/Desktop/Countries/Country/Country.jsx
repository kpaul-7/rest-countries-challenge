import React from "react";
import style from "./Country.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Country = ({ population, region, capital, flags, name }) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  return (
    <div className={`${style.Country} ${themeClass}`}>
      <Link to={`/${name}`}>
        <div className={style.ImgDiv}>
          <img src={flags} alt="Country flag" />
        </div>
        <div className={style.Description}>
          <p className={style.CountryName}>{name}</p>
          <p className={style.info}>Population: {population}</p>
          <p className={style.info}>Region: {region}</p>
          <p className={style.info}>Capital: {capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
