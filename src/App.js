import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  incrementHandler = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };

  deleteHandler = counterId => {
    const counter = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter: counter });
  };

  resetHandler = () => {
    const counters = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counter={this.state.counter}
            onReset={this.resetHandler}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
