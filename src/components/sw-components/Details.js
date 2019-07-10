import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
import {withSwapiService, HOCDetails} from '../HocHelper/HocHelper.js';

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

const PersonDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, personRender), 11), mapMethodsToPerson);

const PlanetDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, planetRender), 11), mapMethodsToPlanet);

const StarshipDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, starshipRender), 11), mapMethodsToStarship);




export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};