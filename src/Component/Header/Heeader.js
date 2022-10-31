import "./style.css";
import React from "react";
import Nav from "./Nav";
import TextContainer from "./TextContainer";

export default function Heeader(props) {
  return (
    <div className="header">
      <Nav />
      <TextContainer/>
    </div>
  );
}
