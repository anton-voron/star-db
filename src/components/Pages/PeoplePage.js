import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components/IndexList.js';
import Row from '../Row/Row.js';

import { withRouter } from 'react-router-dom';

const  PeoplePage = ({history, match}) => {

		const { id } = match.params;
		return (
			<Row
              left = { <PersonList onItemSelected = {(id) => history.push(id)}/> }
              right = { <PersonDetails itemId = {id} /> } 
              />
		)
	
}

export default withRouter(PeoplePage);