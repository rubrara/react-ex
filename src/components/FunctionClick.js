import React from "react";

function FunctionClick() {
  function clickHandler(msg) {
    console.log("Button click! " + msg);
  }

  return (
    <div>
      <button onClick={() => clickHandler("koki4")}> Click </button>{" "}
    </div>
  );
}

export default FunctionClick;
