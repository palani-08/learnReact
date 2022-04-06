import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1); //this is for count +1
  };
  const decrement = () => {
    setcounter(counter - 1); //this is for count -1
  };
  return (
    <>
      <div>
        <h1>Count:{counter}</h1>
      </div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};

export default Counter;
