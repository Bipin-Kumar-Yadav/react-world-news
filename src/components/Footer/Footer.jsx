import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News Website made by -{" "}
        <a href="https://www.linkedin.com/in/bipin-kumar-yadav-25a588203" target="__blank">
          Bipin
        </a>
      </span>
      <hr style={{ width: "90%" }} />
    </div>
  );
};

export default Footer;