import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AnimalInfo from './AnimalInfo';
import CheckOutButton from './CheckOutButton';
import Polaroid from './Polaroid';

var cardStyle = {
  width: '100%',
  float: 'left',
  backgroundColor: '#f6f7f9'
  // margin: '1% 1% 1% 1%'
};

var bioContainer = {
  display: 'table'
};

class KennelCard extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <div style={bioContainer}>
            <div style={{display: 'table'}}>
              <Polaroid />
              <AnimalInfo/>
            </div>
          </div>
          <CardText>
            The animal's short story should go here!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CheckOutButton/>
        </Card>
      </div>
    );
  }
}

export default KennelCard;
