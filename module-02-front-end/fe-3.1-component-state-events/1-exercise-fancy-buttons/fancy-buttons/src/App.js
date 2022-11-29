import React, { Component } from 'react';

function handleClickOne() {
  console.log('Fancy Button 01 clicked!');
}
function handleClickTwo() {
  console.log('Fancy Button 02 clicked!');
}
function handleClickThree() {
  console.log('Fancy Button 03 clicked!');
}

export default class App extends Component {
  render() {
    return (
      <>
        <button onClick={handleClickOne}>Fancy Button 01</button>
        <button onClick={handleClickTwo}>Fancy Button 02</button>
        <button onClick={handleClickThree}>Fancy Button 03</button>
      </>
    );
  }
}
