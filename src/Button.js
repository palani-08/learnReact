import React, { useState } from "react";

const Button = () => {

  const [clicked, setclicked] = useState("This is React");

  const clickHandler = () => {
    setclicked("Im learning React");
  };
  
  return (
    <div>
      <h1>{clicked}</h1>
      <button onClick={clickHandler}>Click to Change</button>
    </div>
  );
};

export default Button;
