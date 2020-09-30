import React, { Component } from "react";
import "./styles.css";

class Result extends Component {
  render() {
    return (
      <div className="output">
        <p>{this.props.result}</p>
      </div>
    );
  }
}

export default Result;
