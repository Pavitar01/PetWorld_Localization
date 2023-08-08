import React from "react";
import Login from "./components/Login";
import "./css/login.css";
import Chat from "./components/Chat";
import { useAppSelector } from "./redux/hooks";
const App = () => {
  const selector = useAppSelector((state) => state.user.user);
  return (
    <div className="parent">{selector.length !== 0 ? <Chat /> : <Login />}</div>
  );
};

export default App;
