import React from "react";

const Card = (props) => {
  const prof = props;
  return (
    <div>
      <img
        src={prof.avatar_url}
        width="90px"
        height="90px"
        style={{ borderRadius: "10px" }}
        alt="mine"
      />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: "120%" }}>{prof.name}</div>
        <div>{prof.company}</div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Card;
