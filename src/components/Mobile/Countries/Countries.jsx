import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import style from "./Countries.module.css";
import Loader from "../../UI/Loader/Loader";
import axios from "axios";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
        );
        setCountries(response?.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchCountry();
  }, []);

  let countriesElements = "";
  if (!loading) {
    if (!countries?.length) {
      countriesElements = <p>No countries found.</p>;
    } else {
      countriesElements = countries.map((coun, idx) => (
        <Country
          key={idx}
          flags={coun.flags.png}
          population={coun.population}
          region={coun.region}
          capital={coun.capital}
          name={coun.name.common}
        />
      ));
    }
  }

  return (
    <div className={style.Countries}>
      {loading && <Loader />}
      {countriesElements}
    </div>
  );
};

export default Countries;
