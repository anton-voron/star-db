import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
import {withSwapiService, HOCDetails, withChildFunction, Compose} from '../HocHelper/HocHelper.js';




const mapMethodsToPerson = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
}

const mapMethodsToPlanet = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
}

const mapMethodsToStarship = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
}

const PersonDetails = Compose(
                              withSwapiService(mapMethodsToPerson),
                              HOCDetails,
                              withChildFunction(personRender())
                              )(ItemDetails);

const PlanetDetails = Compose(
                              withSwapiService(mapMethodsToPlanet),
                              HOCDetails,
                              withChildFunction(planetRender())
                              )(ItemDetails);

const StarshipDetails = Compose(
                                withSwapiService(mapMethodsToStarship),
                                HOCDetails,
                                withChildFunction(starshipRender())
                                )(ItemDetails);




export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};