import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import style from "./Countries.module.css";
import Loader from "../../UI/Loader/Loader";
import axios from "axios";
import { useSelector } from "react-redux";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchValue = useSelector((state) => state.search.country);
  const regionValue = useSelector((state) => state.region.regionName);
  
  const sortCountries = (countries) => {
    let sorted = countries;
    sorted.sort((a, b) => {
      if (a.name.common > b.name.common) return 1;
      else if (a.name.common < b.name.common) return -1;
      else return 0;
    })
    return sorted;
  }
  
  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      let URL =
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";
      if (searchValue !== "") {
        URL = `https://restcountries.com/v3.1/name/${searchValue}`;
      }
      if (regionValue !== "none") {
        URL = `https://restcountries.com/v3.1/region/${regionValue}/`;
      }
      try {
        const response = await axios.get(URL);
        if (regionValue !== "none") {
          let filteredCountries = [];
          if (searchValue !== "") {
            filteredCountries = response?.data.filter((con) => {
              console.log(con);
              return con.name.common
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            });
            setCountries(sortCountries(filteredCountries));
          } else {
            setCountries(sortCountries(response?.data));
          }
        } else {
          setCountries(sortCountries(response?.data));
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [searchValue, regionValue]);

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
