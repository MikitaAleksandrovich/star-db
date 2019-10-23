import React from 'react';
import { withData, 
        withSwapiService, 
        withChildFunction } from '../HOC-helpers';
import ItemList from '../item-list';



const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model}) => <span>{name} (model: {model})</span>


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    }
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                        withChildFunction(renderName)(ItemList)));

                        
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                            withChildFunction(renderModelAndName)(ItemList)));


export {
    PersonList,
    PlanetList,
    StarshipList
};