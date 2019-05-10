import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './PeoplePage.module.css';
import SwapiService from "../../services/SwapiService";
import Row from '../Row/Row';


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
    
    const itemList = (<ItemList
      onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}
      renderItem={({name, gender, birthYear})=> 
      `${name} (${gender}, ${birthYear})`}/>);

      const personDetails = (
        <PersonDetails personId={this.state.selectedPerson} />
      );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
