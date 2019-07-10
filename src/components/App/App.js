import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/IndexList.js';

import { Record } from '../ItemDetails/ItemDetails.js';
import Row from '../Row/Row.js';



import './App.css';

class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const  personList = 
      <PersonList> 
      { ({name}) => <span>{name}</span>}
      </PersonList>;
    const personDetails = 
      <PersonDetails>
        <Record field = "gender"  label="Gender" />
        <Record field = "eyeColor"  label="Eye Color" />
      </PersonDetails>;

    return (
      <ErrorBoundry>
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

		  <Row
        left = { personList }
        right = { personDetails } />

		  <PlanetList> 
			{ ({name}) => <span>{name}</span>}
		  </PlanetList>

		  <StarshipList> 
			{ ({name}) => <span>{name}</span>}
		  </StarshipList>
          <Row
            left={PersonDetails} 
            right = {StarshipDetails} />

        </div>
      </ErrorBoundry>
    );
  } 
};

export default App;