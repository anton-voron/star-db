import React, { Component } from 'react';

import ErrorButton from '../ErrorButton/ErrorButton.js';

import './ItemDetails.css';

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
         <span className="term">{label}</span>
         <span>{item[field]}</span>
      </li>
    )
};

export {
  Record //Теперь мы моежем импортировать Record в App js
 }

export default class ItemDetails extends Component {
 
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
    const { name} = item
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item-details"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => { // получаем доступ к объекту, React.Children.map - позволяет нам не надо задумоваться какого типа child нам попался
                return React.cloneElement(child, { item }); // Принимает несколько аргументов, первый это тот, который нужно скопировать, второй добавляет свойтство в дополнение к тем который там уже определенны field & label в
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}