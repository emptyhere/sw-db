import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import SwapiService from "../../services/SwapiService";
import './App.module.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

import {
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/Item-lists';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components/Detailes';

import {
  SwapiServiceProvider
} from '../swapi-service-context/SwapiServiceContext';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    
    const {getPerson, getStarship,
    getPersonImage, getPlanetImage,
    getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={3}
      getData={getPerson}
      getImageUrl={getPersonImage}
      >
      
      <Record field='gender' label='Gender'/>

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={5}
      getData={getStarship}
      getImageUrl={getStarshipImage}
      >

      <Record field='model' label='Model'/>

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
      <SwapiServiceProvider value={this.swapiService}>
        <Header />
        { planet }

        <div className="row mb2">
          <button
            className="toggle-planet btn btn-secondary btn-lg ml-3 mb-3"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
        </div>

        <PersonList/>
  
        <StarshipList/>
     
        <PlanetList/>


        <PersonDetails itemId={11}/>

        <PlanetDetails itemId={11}/>
        
        <StarshipDetails itemId={11}/>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
