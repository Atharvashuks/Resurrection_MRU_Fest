import React from "react";
import "./Event.css";
export const Domain = ({ imgUrl,moreInfo}) => {
  return (
    <div>
    <div className="Event_Domain">
      <img src={imgUrl} alt="Domains-Images" />
    </div>
    <div className="Event_Buttons">
    
    <button type="button" className="custom__button">
          Register here 
    </button>
    <a href={moreInfo}>
    <button type="button" className="custom__button">
          More Info
    </button>
    </a>
    </div>
    </div>
  );
};