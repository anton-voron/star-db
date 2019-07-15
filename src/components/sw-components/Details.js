import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
import {withSwapiService, HOCDetails} from '../HocHelper/HocHelper.js';

const withChildFunction = (Wrapperd, fn) => {
  return (props) => {

    return(
      <Wrapperd {...props}>
        {fn()}
      </Wrapperd>
    )
  }
};

const personRender = () => { return (
                      <Record field = "gender"  label="Gender" />, 
                      <Record field = "eyeColor"  label="Eye Color" />
                      ) 
};

const planetRender = () => { return (
                      <Record field = "population"  label="Population" />, 
                      <Record field = "rotationPeriod"  label="Rotation Period" />
                      )
};

const starshipRender = () => { return (
                        <Record field = "model"  label="Model" />,
                        <Record field = "length"  label="Length" />,
                        <Record field = "cargoCapacity"  label="Capacity" />
                      )
};

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

const PersonDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, personRender)), mapMethodsToPerson);

const PlanetDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, planetRender)), mapMethodsToPlanet);

const StarshipDetails = withSwapiService(HOCDetails(withChildFunction(ItemDetails, starshipRender)), mapMethodsToStarship);




export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};