import React, { Component } from 'react';

export default class PersonCard extends Component {
    render() {
        const{firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {age}</p><br></br>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

