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

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);


export {
	PersonList,
	PlanetList,
	StarshipList
};