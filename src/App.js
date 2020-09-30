import React, { Component } from "react";
import "./styles.css";
import Calculator from "./Calculator";
import Result from "./Result";
import "./MyStyleSheet.css";

class App extends Component {
  state = {
    result: ""
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "Clear") {
      this.setState({
        result: ""
      });
    } else
      this.setState({
        result: this.state.result + buttonName
      });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Calculator buttonPressed={this.buttonPressed} />
        <Result result={this.state.result} />
      </div>
    );
  }
}

export default App;
