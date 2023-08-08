import { useEffect, useState } from "react";

const UseEffects = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseEffects</h1>
      <p>counter:{counter}</p>
    </div>
  );
};

export default UseEffects;
