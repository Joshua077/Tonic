import React from "react";
import Image from "../../Assets/Image.png";
import Image1 from "../../Assets/Image (1).png";
import Image2 from "../../Assets/Image (2).png";
import './style.css'
export default function Frame5(props) {
  return (
    <div className="frame5">
      <div className="Frame5container2">
        <img src={Image} alt="Image" />
        <h1>Michael Scott</h1>
        <p>General Manager</p>
      </div>
      <div className="Frame5container2">
        <img src={Image1} alt="Image" />
        <h1>Dwight Schrute</h1>
        <p>General Manager</p>
      </div>
      <div className="Frame5container2">
        <img src={Image2} alt="Image" />
        <h1>Pam Beetsley</h1>
        <p>General Manager</p>
      </div>
    </div>
  );
}
