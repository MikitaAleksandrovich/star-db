import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import SwapiService from '../../service/swapi-service';

import { SwapiServiceConsumer } from '../swapi-service-context';

const swapiService = new SwapiService();

const  { getPerson, getPersonImage, 
    getStarship, getStarshipImage,
    getPlanet, getPlanetImage } = swapiService;


const PersonDetails = ({ itemId}) => {

    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails itemId={itemId}
                                    getData={getPerson}
                                    getImageUrl={getPersonImage}>

                        <Fields field="gender" label="Gender" />
                        <Fields field="eyeColor" label="Eye Color" />

        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
        
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId} 
                     getData={getPlanet}
                     getImageUrl={getPlanetImage}>

                <Fields field="population" label="Population" />
                <Fields field="rotation" label="Rotation Period" />
                <Fields field="diameter" label="Diameter" />

        </ItemDetails>
    );
};


const StarshipDetails = ({ itemId }) => {

    return (
        <ItemDetails itemId={itemId} 
                     getData={getStarship}
                     getImageUrl={getStarshipImage}>

        <Fields field="model" label="Model" />
        <Fields field="length" label="Length" />
        <Fields field="costInCredits" label="Cost" />

        </ItemDetails>
    )
};



export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};