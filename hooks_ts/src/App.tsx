import { useState } from "react";
const App = () => {
  const [arr, setArr] = useState<string[]>([]);
  const [val, setVal] = useState("");
  const Add = () => {
    if (!val) {
      alert("Please Add Task");
    } else {
      setArr([...arr, val]);
      setVal("");
    }
  };
  const Del = (e: number) => {
    console.log(e);
    const removeItem = arr.filter((_, todo) => {
      return todo !== e;
    });
    console.log(removeItem);
    setArr(removeItem);
  };
  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

      <button onClick={Add}>Add</button>
      <div className="todos">
        <p>All Task ⬇️</p>
        {arr.map((i, index) => (
          <div key={index} className="task">
            <p> {i}</p>
            <button
              onClick={() => {
                Del(index);
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
