import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService .js';
import Spinner from '../Spinner/Spinner.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

/*constructor () {
  super();
  // Конструктор не должен делать запросы к серверу, это считается плохой практикой. 
  //Его сложнее тестировать и работать. Поэтому делаем все запросы в componentDidMount 
}*/

componentDidMount () {
  this.updatePlanet();
  this.interval = setInterval(this.updatePlanet, 10000); // создаём таймер id, по которому очистим ссылку на метод, когда он станет ненужным, ибо без этого он не удалитьься и будет постоянно делать запрос на сервер
}

componentWillUnmount() {
}

onError = (err) => {
  this.setState({
    error: true, 
    loading: false
  });
}

onPlanetLoaded = (planet) => {
  this.setState({
    planet,
    loading: false
  })
};
  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 2; // выбираем рандомную планету
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError) // перехват ошибки
  }

  render() {
    const { planet, loading, error} = this.state;

    const hasData = !(loading || error)

    const errorIndicator = error ? <ErrorIndicator /> : null // обработка ошибки
    const spinner = loading ? <Spinner /> : null //Воспользуемся свойством JSX разметки (null) не отображается 
    const content = hasData ? <PlanetView planet = {planet} /> : null
    return (
      <div className="random-planet jumbotron rounded">
          {errorIndicator}
          {spinner}
          {content}
      </div>

    );
  }
}


// Для того, чтобы не создавать лишние реакт компоненты, мы использует фрагмент реакта - это элемент обёртка для того, чтобы сгруппировать другие элементы
const PlanetView = ({planet}) => {
  const { id, name, population, 
          rotationPeriod, diameter} = planet;
  return (
    <React.Fragment> 
      <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            alt="planet-img"/>
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