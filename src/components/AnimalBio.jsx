import React, { Component } from 'react';


var animalBio = {
  display: 'table-cell',
  verticalAlign: 'text-top'
};

export default class AnimalBio extends Component {
  render() {
    return (
      <aside style={animalBio}>
        <h3 style={{textAlign: 'center'}}>About Me</h3>
        <li>Joined Us: 05/31/2017</li>
        <li>Gender: Male</li>
        <li>Breed: DSH</li>
        <li>Birthday: 04/22/2017</li>
        <li>Personal History: Stray</li>
        <li>Personal Preferences:</li>
        <li>Cats: Absolutely!</li>
        <li>Dogs: It's a possibility!</li>
        <li>Children: It's a possibility!</li>
        <li>Declawed: No</li>
        <li>Spayed/Neutered: No</li>
        <li>Health: Good!</li>
        <li>Pet ID: 6092</li>
      </aside>
    );
  }
}
