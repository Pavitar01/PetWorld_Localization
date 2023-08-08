import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import "../css/chats.css";
type handleSignOutProps = {
  GoogleSignOut: () => void;
};

const Left = (props: handleSignOutProps) => {
  const [users, setUsers] = useState<undefined | any>();
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    setUsers(user);
  }, []);
  return (
    <div className="profile">
      <img src={users?.photoURL} alt="image" className="image" />
      <h1 className="username">{users?.displayName}</h1>
      <p className="email">{users?.email}</p>
      <i
        className="fa-solid fa-right-from-bracket"
        onClick={props.GoogleSignOut}
      ></i>
      <i className="fa-solid fa-gear"></i>

      {/* <div
        style={{
          bottom: "150px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p> &#x24B8;copyrights are reserved</p>
        <p style={{ color: "lightgray" }}> mychats community</p>
      </div> */}
    </div>
  );
};

export default Left;
