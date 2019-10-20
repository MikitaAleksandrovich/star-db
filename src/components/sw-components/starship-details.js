import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { PersonDetails } from '.';


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


export default PersonDetails;