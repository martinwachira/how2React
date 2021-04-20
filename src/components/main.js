import React, { useState } from "react";
import Counter from "./counter/counter";
import Display from "./counter/display";
import CardList from "./Card/cardList";

const testRecords = [
  {
    name: "Martin Wachira",
    avatar_url: "https://avatars.githubusercontent.com/u/60017194?v=4",
    company: "Poneahealthltd",
  },
  {
    name: "Dennis Henry",
    avatar_url: "https://avatars.githubusercontent.com/u/6372787?v=4",
    company: "Techcraft",
  },
  {
    name: "Muriuki",
    avatar_url: "https://avatars.githubusercontent.com/u/7903958?v=4",
    company: "His company",
  },
  {
    name: "Lucy",
    avatar_url: "https://avatars.githubusercontent.com/u/1666345?v=4",
    company: "Unknown comp",
  },
];

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
        <CardList profiles={testRecords}/>
      </div>
    </>
  );
};

export default Main;
