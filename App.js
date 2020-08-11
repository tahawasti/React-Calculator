import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
    console.log(val);
  };
  addClear = () => {
    this.setState({ input: "" });
  };
  addDecimalToInput = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  addZeroToInput = (val) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  Add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "+";
  };
  Subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "-";
  };
  Multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "*";
  };
  Divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "/";
  };
  Evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "+") {
      // seting state here
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "-") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "*") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "/") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }
  };
  state = {};
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.Divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.Multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.Add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimalToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.Evaluate}>=</Button>
            <Button handleClick={this.Subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.addClear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
