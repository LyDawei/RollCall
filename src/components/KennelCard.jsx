import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import AnimalInfo from './AnimalInfo';
import AnimalStory from './AnimalStory';
import CheckOutButton from './CheckOutButton';
import Polaroid from './Polaroid';

var cardStyle = {
  width: '100%',
  float: 'left',
  backgroundColor: '#f6f7f9'
};

class KennelCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <div style={{ display: 'table' }}>
            <Polaroid />
            <AnimalStory />
            <AnimalInfo />
          </div>
          <CheckOutButton />
        </Card>
      </div>
    );
  }
}

export default KennelCard;
