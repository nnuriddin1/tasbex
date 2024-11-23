import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
      target: 0, 
      totalClicks: 0, 
    };
  }

  handleTargetChange = (value) => {
    this.setState({
      count: 0, 
      target: value, 
    });
  };

  handleCount = () => {
    const { count, target, totalClicks } = this.state;

    if (count < target) {
      this.setState(
        {
          count: count + 1, 
          totalClicks: totalClicks + 1, 
        },
        () => {
          if (this.state.count === this.state.target) {
            this.setState({ count: 0 }); 
          }
        }
      );
    } else {
      this.setState({
        totalClicks: totalClicks + 1,
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: 0, 
      target: 0, 
      totalClicks: 0, 
    });
  };

  render() {
    const { count, target, totalClicks } = this.state;

    return (
      <div className="App">
        <div className="tasbex">
          <h2>Tasbex</h2>
          <div className="t-top">
            <button className="btn" onClick={() => this.handleTargetChange(33)}>
              33
            </button>
            <button className="btn" onClick={() => this.handleTargetChange(99)}>
              99
            </button>
            <button className="btn" onClick={() => this.handleTargetChange(100)}>
              100
            </button>
            <button className="btn" onClick={this.handleReset}>
              reset
            </button>
          </div>
          <div className="t-body">
            <h3>Jami: {totalClicks}</h3> {}
            <h1>
              {count}/{target} {}
            </h1>
          </div>
          <div className="t-bottom">
            <button className="btn-count" onClick={this.handleCount}>
              Count
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
