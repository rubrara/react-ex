import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "click me baby",
    };

    // this.changeText = this.changeText.bind(this);
  }

  // changeText() {
  //   this.setState((prevState) => {
  //     return {
  //       message: prevState.message + " and again",
  //     };
  //   });
  // }

  changeText = () => {
    this.setState((prevState) => {
      return {
        message: prevState.message + " and again",
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeText}> {this.state.message} </button>{" "}
      </div>
    );
  }
}

export default EventBind;
