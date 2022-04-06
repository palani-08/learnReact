import React from "react";

const Welcome = (props) => {
  //const Welcome = ({name,fullName}) is also correct
  //destructring props or properties //we can also give props here
  const { name, fullName } = props;
  return (
    <div>
      <h1>
        Hi my Name is {name} and my full name is {fullName}
      </h1>
      {/* <h1>Hi my Name is {props.name} and my full name is {props.fullName}</h1>  if props is given in the function parameters */}
    </div>
  );
};

export default Welcome;
