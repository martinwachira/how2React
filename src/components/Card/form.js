import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [state, setState] = useState({
    userName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.github.com/users/${state.userName}`
    );
    props.onSubmit(response.data);
    setState({ userName: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.userName}
        type="text"
        name="profile"
        placeholder="github account"
        onChange={(e) => setState({ userName: e.target.value })}
      />
      <button>Add new</button>
    </form>
  );
};

export default Form;
