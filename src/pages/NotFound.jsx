import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginBottom: "10%",
          marginTop: "10%",
          marginLeft: "10%",
          marginRight: "10%",
          textAlign: "center",
        }}
      >
        <h1>Whoops! You might be lost, this page does not exist.</h1>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
