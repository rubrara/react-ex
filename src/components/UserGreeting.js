import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: true,
    };
  }

  //   returnText() {
  //     if (this.state.isLogedIn) return "Hello Kostadin";
  //     else return "Hello User";
  //   }

  render() {
    return <div> Welcome {this.state.isLogedIn ? "Koki" : ""} </div>;

    // return this.state.isLogedIn && <div> Welcome Kostadin! </div>;

    // if (this.state.isLogedIn) {
    //   return <div> Welcome Kostadin </div>;
    // } else {
    //   return <div> Welcome Guest </div>;
    // }

    // return <div> {this.returnText()} </div>;
  }
}

export default UserGreeting;
