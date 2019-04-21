import React from 'react';

export default class Header extends React.Component{

    render(){
        return(
            <div>
                <span>StarWars-DB</span>
                <ul>
                    <li>Peoples</li>
                    <li>Planets</li>
                    <li>Starships</li>
                </ul>
            </div>
        );
    }
}
