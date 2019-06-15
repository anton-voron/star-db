import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
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


const PersonDetails = () => {};

const PlanetDetails = () => {};

const StarshipDetails = () => {};


export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
};