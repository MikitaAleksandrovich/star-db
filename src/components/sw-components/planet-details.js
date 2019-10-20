import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';


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


export default PlanetDetails;