import React, {useState, useEffect} from "react";
import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core";



function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
        }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, [])
  return (
    <div className="app">
      <div className = "app__header">
      <h1> COVID-19 Tracker </h1>
      <FormControl className = "app__dropdown">
        <Select variant = "outlined" value = "abc">
          {/*Loop through all countries and show a drop down list of options*/}

          {countries.map(country => (
            <MenuItem value = {country.value}> {country.name} </MenuItem>
            ))
          }

          {/*<MenuItem value = "worldwide"> Option 1 </MenuItem>
          <MenuItem value = "worldwide"> Option 2 </MenuItem>
          <MenuItem value = "worldwide"> Option 3 </MenuItem>
          <MenuItem value = "worldwide"> Option 4 </MenuItem>*/}

        </Select>
      </FormControl>
      </div>
      

      {/* Header */}

      {/* Title + Select input dropdown field */}

      {/* Infobox 1: */}

      {/* Infobox 2: */}

      {/* Infobox 3: */}

      {/* Chart */}

      {/* Grpah */}

      {/* Map */}

    </div>
  );
}

export default App;
