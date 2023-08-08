import React from "react";
import "../css/card.css"
const FeatureCards = ({ img, title, des }) => {
  return (
    <div className="cards">
      <img src={img} />
      <h5>{title}</h5>
      <p style={{color:"gray"}}>{des}</p>
    </div>
  );
};

export default FeatureCards;
