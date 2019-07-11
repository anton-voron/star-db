import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components/IndexList.js';

export default class PeoplePage extends Component {
	state = {
		selectedItem: null
	}

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem});
	};
	render() {
		return (
			<Row
              left = { <PersonList /> }
              right = { <PersonDetails /> } />
		)
	}
}