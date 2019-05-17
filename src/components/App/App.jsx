import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

import SwapiService from "../../services/SwapiService";
import './App.module.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Row from '../Row/Row';
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
      <div>
        <Header />
        { planet }

        <div className="row mb2">
          <button
            className="toggle-planet btn btn-secondary btn-lg ml-3 mb-3"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
        </div>



        <PersonList>
           {({name}) => <span>{name}</span>}
        </PersonList>

        <StarshipList>
           {({name}) => <span>{name}</span>}
        </StarshipList>

        <PlanetList>
           {({name}) => <span>{name}</span>}
        </PlanetList>

        <PersonDetails itemId={11}/>
        <PlanetDetails itemId={11}/>
        <StarshipDetails itemId={11}/>

      </div>
      </ErrorBoundry>
    );
  }
}
