import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(5);
  return (
    <div>
      <button onClick={()=>setCounter(counter*2)}>{counter}</button>
    </div>
  );
};

export default Counter;
