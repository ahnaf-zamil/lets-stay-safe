import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import safetyInfo from "../safety-info.json";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DisplayAccordions = (props) => {
  const obj = safetyInfo[props.name];
  return (
    <div>
      {obj.map((entry) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <h4>{entry.question}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{entry.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const SafetyGuidelines = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h1>Safety Guidelines & Info</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="accordionContainer">
        <div>
          <h2>General Info</h2>
          <br />
          <DisplayAccordions name={"general-info"} />
        </div>
        <br />
        <br />
        <br />
        <div>
          <h2>Prevention and Safety</h2>
          <br />
          <DisplayAccordions name={"prevention"} />
        </div>
        <br />
        <br />
        <br />
        <div>
          <h2>Cleaning {"&"} Disinfection</h2>
          <br />
          <DisplayAccordions name={"cleaning"} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
