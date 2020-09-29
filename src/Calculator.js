import React, { Component } from "react";
import "./styles.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Total: 0,
      Clear: "false"
    };
  }
  render() {
    return (
      <form>
        <div>
          <h1>Calculator</h1>
        </div>
        <div>
          <table className="table">
            <tr
              style={{
                backgroundColor: "maroon",
                height: "30px",
                color: "white"
              }}
            >
              <td colSpan="4" style={{ textAlign: "right" }}>
                {this.state.Total}
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button style={{ width: "110px", height: "30px" }}>
                  Clear
                </button>
              </td>
              <td>
                <button className="sign">/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button">7</button>
              </td>
              <td>
                <button className="button">8</button>
              </td>
              <td>
                <button className="button">9</button>
              </td>
              <td>
                <button className="sign">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button">4</button>
              </td>
              <td>
                <button className="button">5</button>
              </td>
              <td>
                <button className="button">6</button>
              </td>
              <td>
                <button className="sign">+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button">1</button>
              </td>
              <td>
                <button className="button">2</button>
              </td>
              <td>
                <button className="button">3</button>
              </td>
              <td>
                <button className="sign">=</button>
              </td>
            </tr>
          </table>
        </div>
      </form>
    );
  }
}
export default Calculator;
