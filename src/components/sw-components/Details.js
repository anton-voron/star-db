import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
import HOCDetails from '../HocDetails/HOCDetails.js';
import SwapiService from '../../services/SwapiService .js';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;


const PersonDetails = HOCDetails(ItemDetails, 11, getPerson, getPersonImage);

const PlanetDetails = HOCDetails(ItemDetails, 11, getPlanet, getPlanetImage);

const StarshipDetails = HOCDetails(ItemDetails, 11, getStarship, getStarshipImage);




export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
};