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
  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2; // выбираем рандомную планету
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet, loading} = this.state;
    const spinner = loading ? <Spinner /> : null //Воспользуемся свойством JSX разметки (null) не отображается 
    const content = !loading ? <PlanetView planet = {planet} /> : null
    return (
      <div className="random-planet jumbotron rounded">
          {spinner}
          {content}
      </div>

    );
  }
}



const PlanetView = ({planet}) => {
  const { id, name, population, 
          rotationPeriod, diameter} = planet;
  return (
      // Для того, чтобы не создавать лишние реакт компоненты, мы использует фрагмент реакта - это элемент обёртка для того, чтобы сгруппировать другие элементы
    <React.Fragment> 
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
    </React.Fragment>
  );
};