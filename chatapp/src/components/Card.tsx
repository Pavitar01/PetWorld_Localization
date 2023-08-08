import React from "react";
import "../css/card.css";
type propsdata = {
  username: string;
  flag: number;
};
const Card = (props: propsdata) => {
  return (
    <div className="card">
      <img
        src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
        alt="icon"
        width={50}
      />
      <p className="username">{props.username}</p>
      {props.flag === 1 ? <p>🟢</p> : <p>&#128308;</p>}
    </div>
  );
};

export default Card;
