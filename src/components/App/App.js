import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ItemList from '../ItemList/ItemList.js';
import PersonDetails from '../PersonDetails/PersonDetails.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';


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


  OnPersonSelected = (id) => {
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
      <div>
        <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList OnItemSelected = {this.OnPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  } 
};

export default App;