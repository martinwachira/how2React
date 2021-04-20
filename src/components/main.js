import React, { useState } from "react";
import Counter from "./counter/counter";
import Display from "./counter/display";
import Card from "./Card/card";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const incrementsCounter = (incValue) => setCounter(counter + incValue);
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "10px 100px",
          marginTop: "0px",
          borderRadius: "10px",
        }}
      >
        <Counter onClicks={incrementsCounter} increment={1} />
        <Counter onClicks={incrementsCounter} increment={10} />
        <Counter onClicks={incrementsCounter} increment={100} />
        <Display message={counter} />
      </div>
      <div
        style={{
          margin: "15px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Card />
      </div>
    </>
  );
};

export default Main;
