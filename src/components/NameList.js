import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Koki", "Duse", "Blaze", "Trajce"];

  const persons = [
    {
      id: 1,
      name: "Kostadin",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Dusica",
      age: 21,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Bujrum",
      age: 32,
      skill: ".Net",
    },
    {
      id: 4,
      name: "Kafence",
      age: 25,
      skill: "Spring",
    },
  ];

  const personList = persons.map((person) => (
    <Person person={person} key={person.id} />
  ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return (
    <div>
      {personList}
      {nameList}
    </div>
  );
}

export default NameList;
