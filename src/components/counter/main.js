
import React, { useState } from "react";
import Counter from "./counter";
import Display from "./display";

const Main = () => {
  const [counter, setCounter] = useState(5);
  const incrementsCounter = () => setCounter(counter * 2);
  return (
    <>
      <Counter onClicks={incrementsCounter} />
      <Display message={counter} />
    </>
  );
};

export default Main;
