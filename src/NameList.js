import React from "react";
import Person from "./Person";

const NameList = () => {
  //   const names = [
  //     "palani",
  //     "hari",
  //     "amogha",
  //     "santosh",
  //     "jaga",
  //     "mishi",
  //     "sagar",
  //   ];
  const persons = [
    {
      id: 1,
      name: "palani",
      exper: "6mon",
    },
    {
      id: 2,
      name: "Arvi",
      exper: "4mon",
    },
    {
      id: 3,
      name: "Loki",
      exper: "5mon",
    },
  ];
  return (
    // <div>
    //   {names.map((name) => (
    //     <h3>{name}</h3>
    //   ))}
    // </div>
    <div>
      {persons.map((person) => (
        <Person key={person.id} person={person}></Person> //here we are getting the person from person.js where we have passed parameters as person.
      ))}
    </div>
  );
};

export default NameList;
