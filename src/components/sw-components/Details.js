import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails.js';
import {withSwapiService, HOCDetails} from '../HocHelper/HocHelper.js';

const withChildFunction = (fn) => (Wrapperd) => {
  return (props) => {

    return(
      <Wrapperd {...props}>
        {fn ()}
      </Wrapperd>
    )
  }
};

const personRender = () => { return (
                      <Record field = "gender"  label="Gender" />, 
                      <Record field = "eyeColor"  label="Eye Color" />
                      )};

const planetRender = () => { return (
                      <Record field = "population"  label="Population" />, 
                      <Record field = "rotationPeriod"  label="Rotation Period" />
                      )
                      };

const starshipRender = () => { return (
                        <Record field = "model"  label="Model" />,
                        <Record field = "length"  label="Length" />,
                        <Record field = "cargoCapacity"  label="Capacity" />
                      )};

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

const PersonDetails = withSwapiService(mapMethodsToPerson)(
                                        HOCDetails(
                                          withChildFunction(personRender) (ItemDetails))
  );

const PlanetDetails = withSwapiService(mapMethodsToPlanet)(
                                        HOCDetails(
                                          withChildFunction(planetRender) (ItemDetails)));

const StarshipDetails = withSwapiService(mapMethodsToStarship)(
                                        HOCDetails(
                                          withChildFunction(starshipRender) (ItemDetails)));




export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};