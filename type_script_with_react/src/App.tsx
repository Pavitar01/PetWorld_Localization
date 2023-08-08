import { useEffect, useState } from "react";
import { useAppSelector } from "./Redux/hooks";
import Home from "./component/Home";
import Login from "./component/auth/Login";
import "./css/all.css";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const user = useAppSelector((state) => state.users.user);
  useEffect(() => {
    if (user.length !== 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [user, toggle]);
  return (
    <>
      <div className="app">
        {/* <h1>Album</h1>

        {Index.map((i) => {
          return <Notes text={i.text} id={i.id} />;
        })}
      */}
        {toggle ? <Home /> : <Login />}
      </div>
    </>
  );
};

export default App;
