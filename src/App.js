import React, { Component } from 'react';

import pups from "./pup.json";
import "./App.css";
import Pupcard from './components/Pupcard'





class App extends Component {
  state = {
    pups: pups

  }


  handleClick = (id) => {
    console.log('card clicked', id)


  }


  render() {
    return (
      <div className="intro">
        Clicky App
        {this.state.pups.map(pup => (
          <Pupcard key={pup.id} id={pup.id} name={pup.name} img={pup.image} thisClick={this.handleClick} />
        ))}
      </div>


    )

  }


}


export default App;


