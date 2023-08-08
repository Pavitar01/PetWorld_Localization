import React, { useState } from "react";

type Arrprops = {
  arr: string[];
  setArr: React.Dispatch<React.SetStateAction<string[]>>;
  del: (index: number) => void;
};
const Index = (props: Arrprops) => {
  const [val, setVal] = useState("");
  const onHandleChange = (e: any) => {
    e.preventDefault();
    props.setArr([...props.arr, val]);
  };

  //React.ChangeEvent<HTMLInputElement>
  return (
    <>
      <form onSubmit={onHandleChange}>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <input type="submit" value="Add" />
      </form>
      {props.arr.map((i, index) => (
        <div>
          {i} <button onClick={() => props.del(index)}>-</button>
        </div>
      ))}
    </>
  );
};

export default Index;
