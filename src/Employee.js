import React from "react";
import "./Employee.css";
import { useStateValue } from "./StateProvider";

function Scholar({ name, image, education, country, account }) {
  useStateValue();
  return (
    <div className="employee">
      <div className="employee__info">
        <p className="employee__name">{name}</p>
      </div>
      <img src={image} alt="" />
      
      <h4>{education}</h4>
      <h4>{country}</h4>
      <h4>{account}</h4>
    </div>
  );
}

export default Scholar;
