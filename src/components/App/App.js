import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';

import SwapiService from '../../services/SwapiService .js';
import DummySwapiService from '../../services/Dummy-swapi-service.js';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context.js';
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

export default class App extends Component {

  swapiService = new DummySwapiService();

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

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <StarshipList />

            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}