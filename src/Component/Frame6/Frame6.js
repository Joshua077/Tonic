import React from "react";
import "./style.css";
import Image1 from "../../Assets/frame6Img.png";
import Image2 from "../../Assets/frame6Img1.png";
import Image3 from "../../Assets/frame6Img2.png";
export default function Frame6(props) {
  return (
    <div className="frame6">
      <div className="frame6TextContainer">
        <p>Our Values</p>
        <h2>Things in we believe.</h2>
        <p>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake  infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </p>
      </div>
      <div className="frame6ImageContainer">
        <div className="frame6ImageContainer1">
          <img src={Image1} alt="Logo" />
          <div>
            <h1>We are commited.</h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
        </div>
        <div className="frame6ImageContainer2">
        <img src={Image2} alt="Logo" />
          <div>
          <h1>We are responsible.</h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
         
         
        </div>
        <div className="frame6ImageContainer3">
        <img src={Image3} alt="Logo" />
          <div>
          <h1>We aim for progress.</h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
