import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../service/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    }
    

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            />
        );

        const personDetails = (
            <ErrorBoundry>
            <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            
            <Row left={itemList} right={personDetails} />
        
        );
    }
}
