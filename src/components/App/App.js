import React, {Component} from 'react';

import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import ItemList from '../ItemList/ItemList.js';
import PersonDetails from '../PersonDetails/PersonDetails.js';


import './App.css';

class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }

  OnPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {planet}

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