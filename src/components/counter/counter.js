import React from "react";

const Counter = (props) => {
    const handleClick = () => props.onClicks(props.increment);

  return (
    <div>
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    </div>
  );
};

export default Counter;
