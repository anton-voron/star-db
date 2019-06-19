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
const withDataFunction = (Wrapped, fn) => {
	return (porops) => {
		return ( 
			<Wrapped {...porops}>
				{fn}
			</Wrapped>
		);	
	}
};


const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model}) </span>;

const PersonList = withData(
							withDataFunction(ItemList, renderName),
							 getAllPeople);

const PlanetList = withData(
							withDataFunction(ItemList, renderName),
							getAllPlanets);

const StarshipList = withData(
							withDataFunction(ItemList, renderModelAndName),
							getAllStarships);


export {
	PersonList,
	PlanetList,
	StarshipList
};