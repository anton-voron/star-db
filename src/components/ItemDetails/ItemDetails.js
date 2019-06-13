import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService .js';
import Spinner from '../Spinner/Spinner.js';
import ErrorButton from '../ErrorButton/ErrorButton.js';

import './ItemDetails.css';

const Record = ({item, field, label}) => {
  return (<li className="list-group-item">
       <span className="term">{label}</span>
       <span>{item[field]}</span>
    </li>)
};

export {
  Record //Теперь мы моежем импортировать Record в App js
 }

export default class ItemDetails extends Component {
  swapiService = new SwapiService()
  state = { 
    item: null,
    image: null
  };

  componentDidMount () {
    this.updateItem();
  }

  componentDidUpdate (prevProps) {
    if( this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updateItem () {
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
          this.setState({ 
            item,
            image: getImageUrl(item)
         });
      });
  }
  render() {

    const {item, image} = this.state;
    
    if(!this.state.item) {
      return <span> Select a item a list </span>
    }
    const { id, name, gender, birthYear, eyeColor
      } = item
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item-details"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}