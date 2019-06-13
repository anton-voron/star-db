    
import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService .js';
import Spinner from '../Spinner/Spinner.js';

import './ItemList.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      /*const label = this.props.renderItem(item); // Выводим те дагнные, которе нам нужны ( указанны на верхнем уровне DOM)*/
      const label = this.props.children(item); // Специальное свйоство, которое считывает элементы внутри HTML разметки

      return (
        <li className="list-group-item"
            key={id}
            onClick = {() => this.props.onItemSelected(id)}>
          {label}
        </li>
        );
    });
  }

  render () {
    const { itemList } = this.state;
    if(!itemList) {
      return <Spinner />
    }
    const items = this.renderItems(itemList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
