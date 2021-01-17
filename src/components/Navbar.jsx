import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img
            src="https://cdn.discordapp.com/attachments/795970200499388426/799826243888349225/covid_logo-removebg-preview.png"
            alt="Logo"
          />{" "}
          &nbsp; Stay safe
        </a>
        <div className="navbar_2">
          <ul className="">
            <li>
              <a href="/" className="nav-link hvr-underline-from-center">
                Home
              </a>
            </li>
            <li>
              <a
                href="/safety-info"
                className="nav-link hvr-underline-from-center"
              >
                Safety {"&"} Info
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
