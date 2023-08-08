import React, { useState } from "react";
import Notes1 from "./Notes/Notes";
import { Notes } from "./Notes/data";
import Main from "./Main/Index";
const App = () => {
  const [arr, setArr] = useState<string[]>([]);
  const del = (e: number) => {
    const val = arr.filter((_, i) => i !== e);
    setArr(val);
  };

  return (
    <>
      <Main arr={arr} setArr={setArr} del={del} />

      <div className="parent">
        {Notes.map((i, index) => (
          <Notes1 key={index} text={i.text} />
        ))}
      </div>
    </>
  );
};

export default App;
