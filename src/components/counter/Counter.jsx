import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="counter">
        <style>
          {`
            .counter {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              flex-direction: column;
            }
           .counter-button {
              padding: 10px 20px;
              background-color: #333;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          `}
        </style>
        <h1>Counter</h1>
        {<h2>{this.state.count}</h2>}
        <button className="counter-button" onClick={() => this.handleClick()}>
          Click
        </button>
      </div>
    );
  }
}
