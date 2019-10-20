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


export default PersonDetails;