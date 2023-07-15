import React, { Fragment, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../UI/Loader/Loader";
import { useSelector } from "react-redux";
import style from "./CountryDetails.module.css";
const CountryDetails = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "Dark" ? style.Dark : style.Light;
  const params = useParams();
  const viewedCountry = params?.country;
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  useState(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://restcountries.com/v2/name/${viewedCountry}`
        );
        setLoading(false);
        setCountry(response?.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setCountry([]);
      }
    };
    fetchCountry();
  }, []);
  let languages = "";
  if (country) {
    for (let lan in country[0]?.languages) {
      languages += country[0]?.languages[lan]?.name + ", ";
    }
  }
  let displayElement = "";
  if (!loading) {
    if (!country?.length) {
      displayElement = <p>No country found</p>;
    } else {
      displayElement = (
        <Fragment>
          <div className={style.Back}>
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </Link>
          </div>
          <div className={style.Img}>
            <img src={country[0].flags?.png} alt="" />
          </div>
          <div className={style.Details}>
            <div className={style.FirstDetails}>
              <p className={style.Countryname}>{country[0]?.name}</p>
              <p>
                <span>Native Name:</span> {country[0].nativeName}
              </p>
              <p>
                <span>Population:</span> {country[0].population}
              </p>
              <p>
                <span>Region:</span> {country[0].region}
              </p>
              <p>
                <span>Sub Region:</span> {country[0].subregion}
              </p>
              <p>
                <span>Capital:</span> {country[0].capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span>{" "}
                {country[0].topLevelDomain.join(", ")}
              </p>
              <p>
                <span>Currencies:</span> {country[0]?.currencies[0]?.code}
              </p>
              <p>
                <span>Languages:</span> {languages}
              </p>
            </div>
          </div>
          <div className={style.Bordersection}>
            <p className={style.BorderHeading}>Border Countries: </p>
            <div className={style.Borders}>
              {country[0].borders?.map((bor) => (
                <div className={style.BorderCountry} key={bor}>
                  <p>{bor}</p>
                </div>
              ))}
              {!country[0]?.borders && <p>No country found</p>}
            </div>
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div className={`${style.CountryDetails} ${themeClass}`}>
      <Navbar />
      {loading && <Loader />}
      {displayElement}
    </div>
  );
};

export default CountryDetails;
