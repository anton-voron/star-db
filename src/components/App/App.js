import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';


import SwapiService from '../../services/SwapiService .js';
import DummySwapiService from '../../services/DummySwapiService.js';
import {PeoplePage, 
        PlanetsPage, 
        StarshipsPage,
        LoginPage,
        SecretPage} from '../Pages/index.js';
import {PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components/IndexList.js';

import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    isLoggedIn: false
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

  onLogin = () => {
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn
      }
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet  updateInterval = { 5000 }/> : null;

    return (
      <ErrorBoundry>
       <SwapiServiceProvider value = {this.state.swapiService}>
          <Router>
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
              <Route path ="/" exact={true} render={() => <h2> Welcome to StarDB </h2>} /> 
              <Route path ="/peoples/:id?"  exact = {true} component = {PeoplePage} 
              // people:id? - ? запоминает текущий url с id
              /> 
              <Route path ="/planets" exact = {true} component = {PlanetsPage} />
              <Route path ="/starships" exact = {true} component = {StarshipsPage} />                            
              <Route path ="/people/:id" 
                     render={ ({match, location, history}) => {
                      const { id } = match.params;
                      return <PersonDetails itemId = {id}/>
                   }} />
              <Route path ="/planets/:id" 
                     render={ ({match, location, history}) => {
                      const { id } = match.params;
                      return <PlanetDetails itemId = {id}/>
                   }} />
              <Route path ="/starships/:id" 
                     render={ ({match, location, history}) => {
                      const { id } = match.params;
                      return <StarshipDetails itemId = {id}/>
                   }} />
              <Route path ="/login"  
                     render = {() => {
                      return <LoginPage 
                      isLoggedIn={this.state.isLoggedIn}
                      onLogin ={this.onLogin}/>
                     }} />
              <Route path ="/secret"  
                     render = {() => {
                      return <SecretPage isLoggedIn={this.state.isLoggedIn} />
                     }} />
             </div>
           </Router>
         </SwapiServiceProvider>
      </ErrorBoundry>
    );
  } 
};

export default App;