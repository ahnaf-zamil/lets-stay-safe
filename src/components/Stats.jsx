import React, { useState, useEffect } from "react";
import axios from "axios";

import numeral from "numeral";
import StatBox from "./StatBox";

const displayNumber = (number) => {
  if (typeof number == "string") {
    return number;
  }
  return number ? `${numeral(number).format("0.0a")}` : "0";
};
//

const Stats = ({ countryObj }) => {
  const [cases, setCases] = useState({ perMillion: "N/A", total: "N/A" });
  const [deaths, setDeaths] = useState({ perMillion: "N/A", total: "N/A" });
  const [recovered, setRecovered] = useState({
    perMillion: "N/A",
    total: "N/A",
  });
  const [countryData, setCountryData] = useState({});

  const countryCode = countryObj.code;

  useEffect(() => {
    const getCountryStats = async () => {
      if (countryCode !== "global") {
        const resp = await axios.get(
          `https://disease.sh/v3/covid-19/countries/${countryCode}`,
          {
            headers: {
              "User-Agent": "PostmanRuntime/7.26.8",
              Accept: "*/*",
            },
          }
        );
        const data = resp.data;

        setCases({ perMillion: data.casesPerOneMillion, total: data.cases });
        setDeaths({ perMillion: data.deathsPerOneMillion, total: data.deaths });
        setRecovered({
          perMillion: data.recoveredPerOneMillion,
          total: data.recovered,
        });
        setCountryData(data);
      } else {
        const resp = await axios.get(`https://disease.sh/v3/covid-19/all`);
        const data = resp.data;
        setCases({ perMillion: data.casesPerOneMillion, total: data.cases });
        setDeaths({ perMillion: data.deathsPerOneMillion, total: data.deaths });
        setRecovered({
          perMillion: data.recoveredPerOneMillion,
          total: data.recovered,
        });
        setCountryData(data);
      }
    };
    getCountryStats();
  }, [countryCode]);

  return (
    <div className="statContainer">
      <div className="hvr-grow">
        <StatBox
          title="Cases"
          casesPerMillion={displayNumber(cases.perMillion)}
          totalCases={displayNumber(cases.total)}
          type="cases"
          color="#ff4040"
          country={countryObj}
          countryData={countryData}
        />
      </div>
      <br />
      <br />
      <div className="hvr-grow">
        <StatBox
          title="Deaths"
          casesPerMillion={displayNumber(deaths.perMillion)}
          totalCases={displayNumber(deaths.total)}
          type="deaths"
          color="#737272"
          country={countryObj}
          countryData={countryData}
        />
      </div>

      <br />
      <br />
      <div className="hvr-grow">
        <StatBox
          title="Recovered"
          casesPerMillion={displayNumber(recovered.perMillion)}
          totalCases={displayNumber(recovered.total)}
          type="recoveries"
          color="#28a142"
          country={countryObj}
          countryData={countryData}
        />
      </div>

      <br />
      <br />
    </div>
  );
};

export default Stats;
