import React from "react";
import "./Employee.css";
import { useStateValue } from "./StateProvider";

function Scholar({ name, image }) {
  useStateValue();
  return (
    <div className="employee">
      <div className="employee__info">
        <p className="employee__name">{name}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Scholar;
