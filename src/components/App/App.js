import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';

import SwapiService from '../../services/SwapiService .js'
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/IndexList.js';
import ItemDetails, { Record} from '../ItemDetails/ItemDetails.js';
import Row from '../Row/Row.js';



import './App.css';

class App extends Component {

  swapiService = new SwapiService();

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
		  <PersonList> 
			{ ({name}) => <span>{name}</span>}
		  </PersonList>
		  <PersonDetails itemId={11}/>

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