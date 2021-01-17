import React from "react";
import handleViewport from "react-in-viewport";

const DataSource = (props) => {
  const checkViewport = () => {
    const { inViewport, enterCount } = props;
    if (inViewport && enterCount === 1) {
      return "datasource-wrapper";
    } else if (!inViewport && enterCount < 1) {
      return "datasource-notviewport";
    } else {
      return "datasource-normal";
    }
  };

  return (
    <div className={checkViewport()}>
      <div className="card">
        <div
          className="card-body"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <br />
          <br />
          <img
            style={{ marginLeft: "4%", width: "80%" }}
            src="https://raw.githubusercontent.com/disease-sh/API/master/public/assets/img/icon-long.png"
            alt="Disease.sh logo"
          />
          <h3>
            We get all of our data from Worldometers and John Hopkins University
            COVID-19 Database via an open source API called{" "}
            <a href="https://disease.sh" target="_blank" rel="noreferrer">
              disease.sh
            </a>
          </h3>
          <br />
          <div className="iconContainer">
            <h1>
              <a
                className="linkIcon"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/disease-sh/api"
              >
                <i className="fab fa-github"></i>
              </a>
              &nbsp; &nbsp;
              <a
                className="linkIcon"
                target="_blank"
                rel="noreferrer"
                href="https://disease.sh/docs"
              >
                <i className="fas fa-book"></i>
              </a>
            </h1>
          </div>

          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const DataSourceViewport = handleViewport(DataSource);

export default DataSourceViewport;
