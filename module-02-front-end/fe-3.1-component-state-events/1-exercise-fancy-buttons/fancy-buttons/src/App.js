import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }

  // function not bound to this, returning undefined
  handleClickOne() {
    console.log(this)
    console.log('Fancy Button 01 clicked!');
  }

  // function bound to this via constructor method
  handleClickTwo() {
    console.log(this)
    console.log('Fancy Button 02 clicked!');
  }

  // function bound to this via arrow function
  handleClickThree = () => {
    console.log(this)
    console.log('Fancy Button 03 clicked!');
  }

  render() {
    return (
      <>
        <button onClick={this.handleClickOne}>Fancy Button 01</button>
        <button onClick={this.handleClickTwo}>Fancy Button 02</button>
        <button onClick={this.handleClickThree}>Fancy Button 03</button>
      </>
    );
  }
}
