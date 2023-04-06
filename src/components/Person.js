import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        {person.name} има {person.age} години и учи {person.skill}
      </h2>
    </div>
  );
}

export default Person;
