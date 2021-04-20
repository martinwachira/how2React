import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    userName: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          type="text"
          name="profile"
          placeholder="github account"
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <button>Add new</button>
      </form>
    );
  }
}

export default Form;
