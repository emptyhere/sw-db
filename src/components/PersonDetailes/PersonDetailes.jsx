import React from 'react';
import SwapiService from '../../services/SwapiService';

export default class PersonDetails extends React.Component{
   
    swapiService = new SwapiService();  

    state = {
        person: null
    };


    componentDidMount(){
        this.updatePerson();
    };

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }

    };

    updatePerson() {
        const {personId} = this.props;
        if (!personId){
            return;
        }

        this.swapiService.getCurrentPerson(personId)
        .then((person)=>{
            this.setState({person});
        });
    };
   
    render(){
        
        if (!this.state.person){
            return <span>Select</span>;
        }
        const {
             name, gender, birth_year, eye_color,
             height, mass, hair_color, skin_color
        } = this.state.person;

        return(
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`}
                 alt="character"/>

                 <div>
                     <h4>{name} {this.props.personId}</h4>
                     <ul>
                         <li>
                             <span>Gender: </span>
                             <span>{gender}</span>
                         </li>
                         <li>
                             <span>Birth year: </span>
                             <span>{birth_year}</span>
                         </li>
                         <li>
                             <span>Eye color: </span>
                             <span>{eye_color}</span>
                         </li>
                         <li>
                             <span>Height: </span>
                             <span>{height}</span>
                         </li>
                         <li>
                             <span>Mass: </span>
                             <span>{mass}</span>
                         </li>
                         <li>
                             <span>Hair color: </span>
                             <span>{hair_color}</span>
                         </li>
                         <li>
                             <span>Skin color: </span>
                             <span>{skin_color}</span>
                         </li>
                     </ul>
                 </div>

            </div>

        );
    }
}