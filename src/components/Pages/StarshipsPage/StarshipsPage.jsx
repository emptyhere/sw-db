import React from 'react';
import Row from '../../Row/Row';

import {
    StarshipList
  } from '../../sw-components/Item-lists';
  
import StarshipDetails from '../../sw-components/Starship-Details';


export default class PeoplePage extends React.Component{
    state={
        selectedItem: null
    };

    onItemSelected = (selectedItem) =>{
        this.setState({selectedItem});
    };

    render(){
        const {selectedItem} = this.state;
        return(
            <Row
             left={<StarshipList onItemSelected={this.onItemSelected}/>}
             right={<StarshipDetails itemId={selectedItem}/>}
            />
        );
    }
}