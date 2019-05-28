import React from 'react';
import Row from '../../Row/Row';

import {
    PersonList
  } from '../../sw-components/Item-lists';
  
import PersonDetails from '../../sw-components/Person-Details';


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
             left={<PersonList onItemSelected={this.onItemSelected}/>}
             right={<PersonDetails itemId={selectedItem}/>}
            />
        );
    }
}