import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class PersonCard extends Component {
    
        constructor(props)
        {
            super(props);
            const{firstName, lastName, age, hairColor} = props;
            this.state =
            {
                firstName : firstName,
                lastName : lastName,
                age : age,
                hairColor : hairColor
            }
            
        }
        render(){
            const{firstName, lastName, age, hairColor} = this.state;
        return (
            <div>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {age}</p><br></br>
                <p>Hair Color: {hairColor}</p><br></br>
                <button onClick={()=> this.setState({age: this.state.age + 1})} >Birthday Button for {firstName} {lastName} </button>
            </div>
        );
    }
}


