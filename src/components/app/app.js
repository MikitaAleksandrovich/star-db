import React, { Component }from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../service/swapi-service'; 
import DummySwapiService from '../../service/dummy-swapi-service';
import StarshipDetails from '../sw-components/starship-details';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage,
} from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
        });
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            console.log('Swithced to:', Service.name);
        
        return {
            swapiService: new Service()
        }
        });
    };

    render() {

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className="app">
                        <Header onServiceChange={this.onServiceChange}/>
                
                        <RandomPlanet />

                        <Route  path="/" 
                                render={() => <h2>Welcome to StarDB!</h2>} 
                                exact={true} />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets" component={PlanetsPage} />
                        <Route path="/starships" exact component={StarshipsPage} />
                        <Route path="/starships/:id" 
                               render={({match}) => {
                                 const { id } = match.params;     
                               return <StarshipDetails itemId={id}/> 
                            }} />

                        <Route 
                            path="/login" 
                            render={() => (
                                <LoginPage 
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                            )} />

                        <Route 
                            path="/secret"
                            render={() => (
                                <SecretPage isLoggedIn={isLoggedIn}/>
                            )} />

                    </div>
                </Router>
            </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
};
