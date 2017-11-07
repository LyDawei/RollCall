import React, { Component } from 'react';
import CardText from 'material-ui/Card/CardText';
import './AnimalInfo.css';

export default class AnimalInfo extends Component {
  render() {
    return (
      <div class="animal-bio column-right">
        <CardText>
          <h3 style={{textAlign: 'center'}}>About Me</h3>
          <li>Joined Us: 05/31/2017</li>
          <li>Gender: Male</li>
          <li>Breed: DSH</li>
          <li>Birthday: 04/22/2017</li>
          <li>History: Stray</li>
          <li>Preferences: something here</li>
          <li>Cats: Absolutely!</li>
          <li>Dogs: It's a possibility!</li>
          <li>Children: It's a possibility!</li>
          <li>Declawed: No</li>
          <li>Spayed/Neutered: No</li>
          <li>Health: Good!</li>
          <li>Pet ID: 6092</li>
        </CardText>
      </div>
    );
  }
}
