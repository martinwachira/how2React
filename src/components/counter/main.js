
import React, { useState } from "react";
import Counter from "./counter";
import Display from "./display";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const incrementsCounter = (incValue) => setCounter(counter + incValue);
  return (
    <>
      <Counter onClicks={incrementsCounter} increment={1} />
      <Counter onClicks={incrementsCounter} increment={10} />
      <Counter onClicks={incrementsCounter} increment={100} />
      <Display message={counter} />
    </>
  );
};

export default Main;
