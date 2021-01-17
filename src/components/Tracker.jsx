import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuItem, Select, Typography } from "@material-ui/core";

import Chart from "./Chart";
import Stats from "./Stats";
import Map from "./Map";

const Tracker = () => {
  const [countryList, setCountryList] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Global",
    code: "global",
  });
  const [mapCenter, setMapCenter] = useState({ lat: 48, lng: -6 });
  const [mapZoom, setMapZoom] = useState(2);

  useEffect(() => {
    // Get's list of all countries for country selector dropdown
    const getCountryList = async () => {
      await axios
        .get("https://disease.sh/v3/covid-19/countries")
        .then((res) => {
          const data = res.data;
          const countries = data.map((country) => ({
            name: country.country,
            countryCode: country.countryInfo.iso2,
          }));
          setCountryList(countries);
          setMapCountries(data);
        });
    };

    getCountryList();
  }, [selectedCountry]);

  // Change state after country selection in dropdown
  const changeCountry = async (event) => {
    if (event.target.value !== "global") {
      const resp = (
        await axios.get(
          `https://disease.sh/v3/covid-19/countries/${event.target.value}`
        )
      ).data;
      setSelectedCountry({
        name: resp.country,
        code: resp.countryInfo.iso2,
      });
      setMapCenter([resp.countryInfo.lat, resp.countryInfo.long]);
      setMapZoom(4);
    } else {
      setSelectedCountry({
        name: "Global",
        code: "global",
      });
    }
  };

  return (
    <div className="tracker">
      <br />
      <div className="row">
        <div className="col">
          <div className="leftSide">
            <div className="countryDropdown">
              <Typography color="textPrimary">Country:&nbsp;</Typography>
              <div className="select">
                <Select
                  variant="outlined"
                  value={selectedCountry.code}
                  onChange={changeCountry}
                >
                  <MenuItem value="global">Global</MenuItem>
                  {countryList.map((country) => (
                    <MenuItem value={country.countryCode}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <br />
            <Map countries={mapCountries} zoom={mapZoom} center={mapCenter} />
            <br />
            <br />
            <br />
            <Chart
              selectedCountry={selectedCountry}
              caseType="cases"
              color={"rgba(255, 0, 0, 0.6)"}
            />
            <br />
            <br />
          </div>
        </div>
        <div className="stats col col-lg-2">
          <Stats countryObj={selectedCountry} />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
