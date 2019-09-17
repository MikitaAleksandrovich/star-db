import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/swapi-service';
import Row from '../row';

class ErrorBoundry extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
}

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
            <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            
            <Row left={itemList} right={personDetails} />
        
        );
    }
}
