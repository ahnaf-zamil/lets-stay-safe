import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import InfoModal from "./InfoModal";

const StatBox = ({
  country,
  title,
  casesPerMillion,
  totalCases,
  type,
  color,
  countryData,
}) => {
  const [border, setBorder] = useState("transparent");
  const [caseModal, setCaseModal] = useState(false);

  const setModalState = () => {
    caseModal ? setCaseModal(false) : setCaseModal(true);
  };

  return (
    <Card
      onMouseEnter={() => setBorder(color)}
      onMouseLeave={() => setBorder("transparent")}
      onClick={() => {
        setModalState();
      }}
      className="statBox"
      style={{ width: "500", borderRight: `8px solid ${border}` }}
    >
      <CardContent>
        <Typography className="statBox-title" color="textPrimary">
          {title}
        </Typography>

        <h3 className="statBox-cases">{totalCases}</h3>

        <Typography className="statBox-total" color="textSecondary">
          {casesPerMillion} {type} per million
        </Typography>
      </CardContent>
      <InfoModal
        open={caseModal}
        country={country}
        caseType={type}
        color={color}
        countryData={countryData}
      />
    </Card>
  );
};

export default StatBox;
