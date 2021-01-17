import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import capitalize from "../utils";

const Chart = (props) => {
  const [countryCases, setCountryCases] = useState([]);
  const [caseDates, setCaseDates] = useState([]);
  const [graphAvailable, setGraphAvailable] = useState(true);

  const selectedCountry = props.selectedCountry;
  const caseType = props.caseType;

  let chartData = {
    labels: caseDates,
    datasets: [
      {
        label: capitalize(caseType),
        data: countryCases,
        backgroundColor: props.color,
      },
    ],
  };

  useEffect(() => {
    const getCountryCases = async () => {
      console.log("Country Changed:", selectedCountry);
      if (selectedCountry.code !== "global") {
        try {
          await axios
            .get(
              `https://disease.sh/v3/covid-19/historical/${selectedCountry.code}?lastdays=60`
            )
            .then((res) => {
              const data = res.data;
              let cases = [];
              let dates = [];
              Object.entries(data.timeline[caseType]).map((entry) => {
                cases.push(entry[1]);
                dates.push(entry[0]);
                return;
              });
              setCountryCases(cases);
              setCaseDates(dates);
              setGraphAvailable(true);
            });
        } catch (error) {
          setGraphAvailable(false);
        }
      } else {
        await axios
          .get("https://disease.sh/v3/covid-19/historical/all?lastdays=60")
          .then((res) => {
            const data = res.data;
            let cases = [];
            let dates = [];
            Object.entries(data[caseType]).map((entry) => {
              cases.push(entry[1]);
              dates.push(entry[0]);
              return;
            });
            setCountryCases(cases);
            setCaseDates(dates);
            setGraphAvailable(true);
          });
      }
    };

    getCountryCases();
  }, [selectedCountry]);

  return (
    <div className="chart">
      {graphAvailable ? (
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: `COVID-19 Cases for the last 2 months: ${selectedCountry.name}`,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      ) : (
        <Bar
          data={{}}
          options={{
            title: {
              display: true,
              text: "Graph not available",
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
