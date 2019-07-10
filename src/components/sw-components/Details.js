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

const withChildFunction = (Wrapperd, fn) => {
  return (props) => {
    return(
      <Wrapperd {...props}>
        {fn}
      </Wrapperd>
    )
  }
};

const personRender = [<Record field = "gender"  label="Gender" />, 
                      <Record field = "eyeColor"  label="Eye Color" />
                      ];

const planetRender = [<Record field = "population"  label="Population" />, 
                      <Record field = "rotationPeriod"  label="Rotation Period" />
                      ];

const starshipRender = [<Record field = "model"  label="Model" />,
                        <Record field = "length"  label="Length" />,
                        <Record field = "cargoCapacity"  label="Capacity" />
                      ];
const PersonDetails = HOCDetails(withChildFunction(ItemDetails, personRender), 11, getPerson, getPersonImage);

const PlanetDetails = HOCDetails(withChildFunction(ItemDetails, personRender), 11, getPlanet, getPlanetImage);

const StarshipDetails = HOCDetails(withChildFunction(ItemDetails, starshipRender), 11, getStarship, getStarshipImage);




export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
};