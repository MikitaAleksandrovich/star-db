import React from 'react';
import { withData, withSwapiService }  from '../HOC-helpers';
import ItemList from '../item-list';
import SwapiService from '../../service/swapi-service';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

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

const PersonList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

                        
const StarshipList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);


export {
    PersonList,
    PlanetList,
    StarshipList
};