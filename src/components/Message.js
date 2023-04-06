import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage(msg) {
    this.setState({
      message: msg,
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>{" "}
        <button
          onClick={() => this.changeMessage("Thank you for subscribing!")}>
          {" "}
          Action{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Message;
