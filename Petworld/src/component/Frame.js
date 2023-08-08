import React from "react";
import petvid from "../Assets/video/petsvid.mp4";
const Frame = () => {
  return (
    <div style={{width:"100%",paddingBottom:"50px"}}  className="frame">
      <video  width={800} controls autoPlay>
        <source src={petvid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Frame;
