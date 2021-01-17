import React from "react";
import { Modal, Card, CardContent } from "@material-ui/core";
import capitalize from "../utils";

import Chart from "./Chart";

const InfoModal = ({ open, country, caseType, color, countryData }) => {
  return (
    <div className="infoModal">
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modalCard">
          <Card>
            <CardContent className="modalCard-items">
              <div className="modalHeader">
                <h3>COVID-19 Stats for {country.name}</h3>
                <br />
                <img
                  src={
                    "countryInfo" in countryData
                      ? countryData.countryInfo.flag
                      : "https://icon-library.com/images/global-icon-png/global-icon-png-27.jpg"
                  }
                  className="countryFlag"
                  alt={""}
                />
              </div>
              <br />
              <div className="modalChart">
                <h5>
                  {capitalize(caseType)}:{" "}
                  {
                    countryData[
                      caseType === "recoveries" ? "recovered" : caseType
                    ]
                  }
                </h5>
                <br />
                <Chart
                  selectedCountry={country}
                  caseType={caseType === "recoveries" ? "recovered" : caseType}
                  color={color}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default InfoModal;
