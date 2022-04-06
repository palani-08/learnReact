import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        i am {person.name},my experience is {person.exper}
      </h2>
    </div>
  );
}

export default Person;
