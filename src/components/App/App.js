import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';
import PeoplePage from '../PeoplePage/PeoplePage.js'


import './App.css';

class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: 4,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  onPersonSelected  = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  componentDidCatch () {
    console.log('Component did catch');
    this.setState({hasError: true});
  }
  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="stardb-app">
        <Header />
        { planet }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />

      </div>
    );
  } 
};

export default App;