import React, { Component } from "react";

import "./styles.css";

class Calculator extends Component {
  buttonPressed = (event) => {
    this.props.buttonPressed(event.target.name);
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <div>
          <table className="table">
            {/* <tr
              style={{
                backgroundColor: "maroon",
                height: "43px",
                color: "white"
              }}
            >
              <td colSpan="4" style={{ textAlign: "right" }}>
              <Output />
              </td>
            </tr> */}

            <tr>
              <td colSpan="3">
                <button
                  style={{
                    width: "130px",
                    height: "40px",
                    fontSize: "20px",
                    borderWidth: "0.5px"
                  }}
                  name="Clear"
                  onClick={this.buttonPressed}
                >
                  Clear
                </button>
              </td>
              <td>
                <button className="sign" name="/" onClick={this.buttonPressed}>
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td key={"7"}>
                <button
                  className="button"
                  name="7"
                  onClick={this.buttonPressed}
                >
                  7
                </button>
              </td>
              <td key={"8"}>
                <button
                  className="button"
                  name="8"
                  onClick={this.buttonPressed}
                >
                  8
                </button>
              </td>
              <td key={"9"}>
                <button
                  className="button"
                  name="9"
                  onClick={this.buttonPressed}
                >
                  9
                </button>
              </td>
              <td>
                <button className="sign" name="-" onClick={this.buttonPressed}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td key={"4"}>
                <button
                  className="button"
                  name="4"
                  onClick={this.buttonPressed}
                >
                  4
                </button>
              </td>
              <td key={"5"}>
                <button
                  className="button"
                  name="5"
                  onClick={this.buttonPressed}
                >
                  5
                </button>
              </td>
              <td key={"6"}>
                <button
                  className="button"
                  name="6"
                  onClick={this.buttonPressed}
                >
                  6
                </button>
              </td>
              <td>
                <button className="sign" name="+" onClick={this.buttonPressed}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td key={"1"}>
                <button
                  className="button"
                  name="1"
                  onClick={this.buttonPressed}
                >
                  1
                </button>
              </td>
              <td key={"2"}>
                <button
                  className="button"
                  name="2"
                  onClick={this.buttonPressed}
                >
                  2
                </button>
              </td>
              <td key={"3"}>
                <button
                  className="button"
                  name="3"
                  onClick={this.buttonPressed}
                >
                  3
                </button>
              </td>
              <td>
                <button className="sign" name="=" onClick={this.buttonPressed}>
                  =
                </button>
              </td>
            </tr>
          </table>
        </div>
      </form>
    );
  }
}
export default Calculator;
