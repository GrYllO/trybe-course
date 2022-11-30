import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.state = {
      buttonOneClicks: 0,
      buttonTwoClicks: 0,
      buttonThreeClicks: 0
    }
  }

  // function not bound to this, returning undefined
  handleClickOne() {
    console.log(this)
    console.log('Fancy Button 01 clicked!');
  }

  // function bound to this via constructor method
  handleClickTwo() {
    this.setState({buttonTwoClicks: 1}); // setting new state statically
    console.log('Fancy Button 02 clicked!');
  }

  // function bound to this directly via arrow function
  handleClickThree = () => {
    this.setState((previousClicks, _props) => ({
      buttonThreeClicks: previousClicks.buttonThreeClicks + 1
    })); // setting new state dynamically
    console.log('Fancy Button 03 clicked!');
  }

  render() {
    const { buttonOneClicks, buttonTwoClicks, buttonThreeClicks } = this.state;
    return (
      <>
        <button onClick={this.handleClickOne}>{buttonOneClicks}</button>
        <button onClick={this.handleClickTwo}>{buttonTwoClicks}</button>
        <button onClick={this.handleClickThree}>{buttonThreeClicks}</button>
      </>
    );
  }
}
