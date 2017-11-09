import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import AnimalInfo from './AnimalInfo';
import AnimalStory from './AnimalStory';
import CheckOutDialog from './CheckOutDialog';
import Polaroid from './Polaroid';
import './KennelCard.css';

class KennelCard extends Component {
  render() {
    return (
      <Card class="kennel-card">
        <Polaroid />
        <AnimalStory />
        <AnimalInfo />
        <CheckOutDialog />
      </Card>
    );
  }
}

export default KennelCard;
