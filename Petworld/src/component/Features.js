import React from "react";
import { features } from "../config/featuresCard";
import FeatureCards from "../Cards/FeatureCards";
const Features = () => {
  return (
    <div className="features">
      {features.map((i, index) => {
        return <FeatureCards img={i.img} title={i.title} des={i.des} />;
      })}
    </div>
  );
};

export default Features;
