import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList.js';
import ItemDetails from '../ItemDetails/ItemDetails.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js';
import SwapiService from '../../services/SwapiService .js';
import Row from '../Row/Row.js';
import './PeoplePage.css';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();
	state = {
		selectedItem: 3
	}

	

	 onItemSelected = (selectedItem) => {
    	this.setState({ selectedItem });
  	};

	render () {
		if (this.state.hasError) {
	      return <ErrorIndicator />;
	    }

	    const itemList = (
	    	<ItemList 
	          onItemSelected={this.onItemSelected} 
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

	    const itemDetails = (
	    	<ErrorBoundry>
				<ItemDetails itemId={this.state.selectedItem} />
	    	</ErrorBoundry>
	    	);
		return (
	      		<Row left = {itemList} right={itemDetails} />
	    );
	}
};


