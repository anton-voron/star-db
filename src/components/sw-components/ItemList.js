import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import {withData, withSwapiService} from '../HocHelper/HocHelper.js';


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapMethodsToAllPeople = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
}
const mapMethodsToAllPlanet = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
}
const mapMethodsToAllStarships = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
}

const PersonList = withSwapiService(withData(withChildFunction (ItemList, renderName)), mapMethodsToAllPeople);

const PlanetList = withSwapiService(withData(withChildFunction (ItemList, renderName)), mapMethodsToAllPlanet);

const StarshipList = withSwapiService(withData(withChildFunction (ItemList, renderNameAndModel)), mapMethodsToAllStarships);


export {
	PersonList,
	PlanetList,
	StarshipList
};