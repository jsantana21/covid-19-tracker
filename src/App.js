import React, {useState} from "react";
import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState(['USA', 'MEXICO', 'CANADA']);
  return (
    <div className="app">
      <div className = "app__header">
      <h1> COVID-19 Tracker </h1>
      <FormControl className = "app__dropdown">
        <Select variant = "outlined" value = "abc">
          {/*Loop through all countries and show a drop down list of options*/}

          {countries.map(country => (
            <MenuItem value = {country}> {country} </MenuItem>
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
