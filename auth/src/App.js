import React, { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [Task, setTask] = useState([]);
  const [Text, setText] = useState();
  const OnHandleSubmit = (e) => {
    e.preventDefault();
    if (Text !== "") {
      setTask([...Task, Text]);
      setText("");
    }
  };
  return (
    <>
      <div>
        <h1 title="heading">TODO List</h1>
        <form onSubmit={OnHandleSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            data-testid="input-element"
            value={Text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul data-testid="ul-element">
          {Task.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      </div>

      <Login />
    </>
  );
};

export default App;
