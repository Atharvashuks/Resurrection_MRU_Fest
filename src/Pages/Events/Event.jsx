import React from "react";
import "./Event.css";
export const Domain = ({ imgUrl }) => {
  return (
    <div className="Event_Domain">
      <img src={imgUrl} alt="Domains-Images" />
    </div>
  );
};