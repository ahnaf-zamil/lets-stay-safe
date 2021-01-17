import React from "react";
import "../css/App.css";
import "leaflet/dist/leaflet.css";
import Tracker from "../components/Tracker";
import NewsCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DataSourceViewport from "../components/DataSource";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="carouselContainer">
        <NewsCarousel />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="safetyHeader"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="trackerHeader">Tracker</h1>
        <br />
      </div>
      <div className="trackerContainer">
        <Tracker />
      </div>
      <div className="dataSourceContainer">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <h1 className="trackerHeader">What is the source of our data?</h1>
          <br />
          <br />
          <DataSourceViewport />
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
