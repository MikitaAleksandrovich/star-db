import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/swapi-service';
import Row from '../row';



export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true,
        })
    }
    

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}
