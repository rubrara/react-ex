import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1> Hello baby {props.name} </h1>{" "}
    </div>
  );
};

//   return React.createElement(
//     "div",
//     { id: "Hello" },
//     React.createElement("h1", null, "Hello baby")
//   );

export default Hello;
