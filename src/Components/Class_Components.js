import React, { Component } from "react";

export default class Class_Components extends Component {
  state = {
    name: "Telugu Skillhub",
  };
  render() {
    return (
      <div>
        <h1>Welcome To {this.state.name}</h1>
      </div>
    );
  }
}
