
import React, { useState } from "react";

const Counter = (props) => {

//   const handleClick = () => setCounter(counter * 2);

  return (
    <div>
      <button onClick={props.onClicks}>Times 2</button>
    </div>
  );
};

export default Counter;
