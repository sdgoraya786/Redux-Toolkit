import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>SD Goraya</div>
      <div>©{new Date().getFullYear()}, SDG, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
