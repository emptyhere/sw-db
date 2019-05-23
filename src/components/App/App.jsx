import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';

import SwapiService from "../../services/SwapiService";
import './App.module.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import PeoplePage from './../Pages/PeoplePage/PeoplePage';
import PlanetsPage from './../Pages/PlanetsPage/PlanetsPage';
import StarshipsPage from './../Pages/StarshipsPage/StarshipsPage';


import {
  SwapiServiceProvider
} from '../swapi-service-context/SwapiServiceContext';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className="stardb-app">

            <Header onServiceChange={this.onServiceChange} />
            
            <RandomPlanet />

            <PeoplePage/>
            
            <PlanetsPage />

            <StarshipsPage/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}