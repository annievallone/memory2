import React, { Component } from 'react';
import PupCard from "./components/pupcard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import pups from "./pup.json";
import "./App.css";


class App extends Component {
  state = {
    pups
  };

  render() {
    return (
      <Wrapper>
        <Title>pup List</Title>
        {this.state.pups.map(pup => (
          <PupCard
            removePup={this.removePup}
            id={pup.id}
            key={pup.id}
            name={pup.name}
            image={pup.image}
            occupation={pup.occupation}
            location={pup.location}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
