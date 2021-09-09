import React, { Component } from "react";
import "./counter.css"

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCountby1 = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementCountby2 = () => {
    this.setState({
      count: this.state.count + 2,
    });
  };

  decrementCountby1 = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  decrementCountby2 = () => {
    this.setState({
      count: this.state.count - 2,
    });
  };
  render() {
    let { count } = this.state;
    return (
      <div class="app">
        <div class="heading">Counter app</div>
        <div class="app-body">
          <div class="buttons">
            <button
              onClick={(e) => {
                this.incrementCountby2();
              }}
            >
              +2
            </button>
            <button
              onClick={(e) => {
                this.incrementCountby1();
              }}
            >
              +1
            </button>
          </div>
          {count === 0 ? (
            <div class="count">
              
              <h1>zero</h1>
            </div>
          ) : (
            <div class="count">
              
              <h1>{count}</h1>
            </div>
          )}

          <div class="buttons">
            <button
              onClick={(e) => {
                this.decrementCountby1();
              }}
            >
              -1
            </button>

            <button
              onClick={(e) => {
                this.decrementCountby2();
              }}
            >
              -2
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter;
