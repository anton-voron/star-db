import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import {withData, withSwapiService} from '../HocHelper/HocHelper.js';


const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapMethodsToAllPeople)(
									withData(
										withChildFunction (renderName) (ItemList))
									);

const PlanetList = withSwapiService(mapMethodsToAllPlanet)(
									withData(
										withChildFunction (renderName) (ItemList))
									);

const StarshipList = withSwapiService(mapMethodsToAllStarships)(
									withData(
										withChildFunction (renderNameAndModel) (ItemList))
									);


export {
	PersonList,
	PlanetList,
	StarshipList
};