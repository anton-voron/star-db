import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';


import SwapiService from '../../services/SwapiService .js';
import DummySwapiService from '../../services/DummySwapiService.js';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../Pages/index.js';

import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context.js';



import './App.css';

class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log(`Switched to ${Service.name}`)
      return {
        swapiService: new Service()
      };
    });
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
       <SwapiServiceProvider value = {this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange = {this.onServiceChange}/>
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
            <PlanetsPage />
            <StarshipsPage />
           </div>
         </SwapiServiceProvider>
      </ErrorBoundry>
    );
  } 
};

export default App;