import React, { Component } from "react";
import Display from "./Display";

export default class StateAndProps extends Component {
  state = {
    name : "Telugu Skillhub",
  };
  render() {
    return (
      <div>
        <center>
          <Display name={this.state.name} />
        </center>
      </div>
    );
  }
}
