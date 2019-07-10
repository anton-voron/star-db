import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import SwapiService from '../../services/SwapiService .js';
import withData from '../HocHelper/withData.js';


const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships
} = swapiService;

const withChildFunction = (Wrapperd, fn) => {
	return (props) => {
		return(
			<Wrapperd {...props}>
				{fn}
			</Wrapperd>
		)
	}
}

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const PersonList = withData(withChildFunction (ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFunction (ItemList, renderName), getAllPlanets);

const StarshipList = withData(withChildFunction (ItemList, renderNameAndModel), getAllStarships);


export {
	PersonList,
	PlanetList,
	StarshipList
};