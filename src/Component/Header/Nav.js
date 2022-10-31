import React from "react";
import "./style.css";
import Logo from "../../Assets/Logo Shape (1).png"
export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <h1> <img src={Logo} alt="Logo" className="Logo"/>Boldo</h1>
      </div>
      <div className="tab">
        <p>Product</p>
        <p>Services</p>
        <p>About</p>
        <button className="buttonHeader"> Log in</button>
      </div>
    </div>
  );
}
