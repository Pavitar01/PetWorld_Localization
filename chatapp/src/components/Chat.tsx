import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { app } from "../config/Index";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import { Button, message } from "antd";
import "../css/chats.css";
import Left from "./Left";
import Middle from "./Middle";

const Chat = () => {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    messageApi.info("Hello, User Welcome To Chats");
  }, []);
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const GoogleSignOut = () => {
    signOut(auth);
    dispatch(addUser([]));
  };
  return (
    <div className="Chats">
      {contextHolder}
      <div className="board">
        <div className="left">
          <Left GoogleSignOut={GoogleSignOut} />
        </div>
        <div className="middle">
          <Middle />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Chat;
