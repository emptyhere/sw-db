import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

//import style from './App.module.css';
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import SwapiService from "../../services/SwapiService";
import './App.module.css';

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

    return (
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
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item)=> item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item)=> item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

      </div>
    );
  }
}
