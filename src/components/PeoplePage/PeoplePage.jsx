import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import PersonDetails from '../ItemDetails/ItemDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './PeoplePage.module.css';
import SwapiService from "../../services/SwapiService";
import Row from '../Row/Row';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  };



  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    
    const itemList = (<ItemList
      onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}>

      {({name, gender, birthYear})=> 
      `${name} (${gender}, ${birthYear})`}

      </ItemList>
      );

      const personDetails = (
        <PersonDetails personId={this.state.selectedPerson} />
      );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
