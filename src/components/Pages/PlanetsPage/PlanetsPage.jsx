import React from 'react';
import Row from '../../Row/Row';

import {
    PlanetList
  } from '../../sw-components/Item-lists';
  
import PlanetDetails from '../../sw-components/Planet-Details';


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
             left={<PlanetList onItemSelected={this.onItemSelected}/>}
             right={<PlanetDetails itemId={selectedItem}/>}
            />
        );
    }
}