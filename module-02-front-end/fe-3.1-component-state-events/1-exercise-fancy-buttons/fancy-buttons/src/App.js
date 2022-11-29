import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne() {
    console.log(this)
    console.log('Fancy Button 01 clicked!');
  }
  handleClickTwo() {
    console.log(this)
    console.log('Fancy Button 02 clicked!');
  }
  handleClickThree() {
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
