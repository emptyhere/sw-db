import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './PeoplePage.module.css';
import SwapiService from "../../services/SwapiService";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({name, gender, birthYear})=> 
            `${name} (${gender}, ${birthYear})`}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
