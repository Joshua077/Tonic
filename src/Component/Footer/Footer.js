import React from "react";
import './style.css'
import Logo from "../../Assets/Logo Shape (2).png"
export default function Footer(props) {
  return (
    <div className="footerContainer">
 <div className="footer">
      <div className="footerContainer1">
        
        <h1 className="foo"> <img src={Logo} alt="Logo"/> Boldo</h1>
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
      </div>
      <div className="footerContainer2">
        <h5>Landings</h5>
        <p>Home</p>

        <p>Products</p>

        <p>Services</p>
      </div>
      <div className="footerContainer3">
        <h5>Company</h5>
        <p>Home</p>

        <p>Career <button>Hiring!</button> </p> 

        <p>Services</p>
      </div>
      <div className="footerContainer4">
        <h5>Resources</h5>
        <p>Blog</p>

        <p>Products</p>

        <p>Services</p>
      </div>
    </div>
    <p className="copyRight">All rights reserved.</p>
    </div>
   
  );
}
