import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService .js';
import Spinner from '../Spinner/Spinner.js'

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

constructor () {
  super();
  this.updatePlanet();
}

onPlanetLoaded = (planet) => {
  this.setState({
    planet,
    loading: false
  })
};
//Math.floor(Math.random()*25) + 2
  updatePlanet() {
    const id = 1; // выбираем рандомную планету
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet: {id, name, population, 
                     rotationPeriod, diameter},
                     loading } = this.state;

      if(loading) {
        //Пока не прогрузилась инфа с API сервера, заменяем её на спинер
        return <Spinner />
      }
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}