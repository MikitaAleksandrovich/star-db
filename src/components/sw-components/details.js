import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';


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
        <SwapiServiceConsumer>
        {
            ({getPlanet, getPlanetImage }) => {
                return (
                    <ItemDetails itemId={itemId} 
                                getData={getPlanet}
                                getImageUrl={getPlanetImage}>

                        <Fields field="population" label="Population" />
                        <Fields field="rotation" label="Rotation Period" />
                        <Fields field="diameter" label="Diameter" />
        </ItemDetails>
                );
            }
        }
        </SwapiServiceConsumer>
    );
};


const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails itemId={itemId} 
                                    getData={getStarship}
                                    getImageUrl={getStarshipImage}>

                            <Fields field="model" label="Model" />
                            <Fields field="length" label="Length" />
                            <Fields field="costInCredits" label="Cost" />

                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};



export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};