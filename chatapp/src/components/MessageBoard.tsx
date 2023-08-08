import { useState } from "react";
import { usersdata } from "../dummy";
const MessageBoard = () => {
  const [text, setText] = useState("");

  const onHandleSubmit = (e: any) => {
    e.preventDefault()
  };
  return (
    <div className="messageBoard">
      <div className="Top">
        <img
          src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
          alt="icon"
        />

        <p style={{ width: "85%", overflow: "hidden", height: "50px" }}>
          {usersdata[0].username}
        </p>
        {usersdata[0].flag === 1 ? <p>🟢</p> : <p>&#128308;</p>}
      </div>
      <div className="Middle"></div>
      <div className="Bottom">
        <div className="inputs">
          <form onSubmit={onHandleSubmit}>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button type="submit" >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
