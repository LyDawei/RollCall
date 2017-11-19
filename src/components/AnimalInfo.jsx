import React, { Component } from 'react';
import CardText from 'material-ui/Card/CardText';
import PropTypes from 'prop-types'
import './AnimalInfo.css';

export default class AnimalInfo extends Component {
  render() {
    return (
      <div className="animal-bio column-right">
        <CardText>
          <h3 style={{ textAlign: 'center' }}>About Me</h3>
          <li>
            <b>Joined Us: </b>
            {this.props.dateJoined}
          </li>
          <li>
            <b>Gender: </b>
            {this.props.gender}
          </li>
          <li>
            <b>Breed: </b>
            {this.props.breed}
          </li>
          <li>
            <b>Birthday: </b>
            {this.props.birthday}
          </li>
          <li>
            <b>History: </b>
            {this.props.history}
          </li>
          <li>
            <b>Preferences: </b>
          </li>
          <li>
            <i>Cats: </i>
            {this.props.cats}
          </li>
          <li>
            <i>Dogs: </i>
            {this.props.dogs}
          </li>
          <li>
            <i>Children: </i>
            {this.props.children}
          </li>
          <li>
            <b>Declawed: </b>
            {this.props.declawed ? 'Yes' : 'No'}
          </li>
          <li>
            <b>Spayed/Neutered: </b>
            {this.props.spayedOrNeutered ? 'Yes' : 'No'}
          </li>
          <li>
            <b>Health: </b>
            {this.props.health}
          </li>
          <li>
            <b>Pet ID: </b>
            {this.props.petId}
          </li>
        </CardText>
      </div>
    );
  }
}

AnimalInfo.PropTypes = {
  dateJoined: PropTypes.string,
  gender: PropTypes.string,
  breed: PropTypes.string,
  birthday: PropTypes.string,
  history: PropTypes.string,
  cats: PropTypes.string,
  dogs: PropTypes.string,
  children: PropTypes.string,
  declawed: PropTypes.bool,
  spayedOrNeutered: PropTypes.bool,
  health: PropTypes.string,
  petId: PropTypes.string
};
