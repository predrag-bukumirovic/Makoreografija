import React from "react";
import Logo from "../images/majalogo2.png";

export default function Loading() {
  return (
    <div className="loading-spiner">
      <img className="logo-animation" src={Logo} alt="Loading logo" />
    </div>
  );
}
