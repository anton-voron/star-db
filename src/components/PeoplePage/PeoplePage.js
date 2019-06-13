import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList.js';
import PersonDetails from '../PersonDetails/PersonDetails.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';
import SwapiService from '../../services/SwapiService .js';
import Row from '../Row/Row.js';
import './PeoplePage.css';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();
	state = {
		selectedPerson: 3
	}

	

	 onPersonSelected = (selectedPerson) => {
    	this.setState({ selectedPerson });
  	};

	render () {
		if (this.state.hasError) {
	      return <ErrorIndicator />;
	    }

	    const itemList = (
	    	<ItemList 
	          onItemSelected={this.onPersonSelected} 
	          getData = {this.swapiService.getAllPeople}
	          /* Передаём саму функцию, а не вызываем ёё , поскольку тогда следующий компонент сам решает, когда её вызвать. 
	          И так как мы передаём контекст this в SwapiService нужно привязать через bind / или стрелочную функцию () => {} */
	          /*renderItem = {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}*/
	          /*renderItem = {({name, gender, birthYear}) => ( // Создаём функцию, которая будет выводить необходимые для нас свойства из объекта для конкретного случая !!!!!!! Используй render функцию в TABACOS!!!!!!
	          	`${name}  (${gender}, ${birthYear})`)}*/>
	          	{(item) => ( 
	          		`${item.name}  (${item.birthYear})`
	          	)}
	          </ItemList> 
	    	);

	    const persoDetails = (
	    	<ErrorBoundry>
				<PersonDetails personId={this.state.selectedPerson} />
	    	</ErrorBoundry>
	    	);
		return (
	      		<Row left = {itemList} right={persoDetails} />
	    );
	}
};


