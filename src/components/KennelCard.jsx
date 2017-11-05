import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AnimalBio from './AnimalBio';
import CheckOutButton from './CheckOutButton';

var cardStyle = {
  width: '100%',
  float: 'left',
  backgroundColor: '#f6f7f9'
  // margin: '1% 1% 1% 1%'
};

var cardMediaStyle = {
  width: '100%',
  height: 'auto',
  display: 'table-cell'
};

var pictureWrapper = {
  backgroundColor: '#fff',
  margin: '10px',
  marginRight: '20px',
  border: '10px solid #fff',
  borderStyle: 'solid',
  borderRadius: '2px',
  width: '300px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  
};

var bioContainer = {
  display: 'table'
};

var cardTitle = {
  textAlign: 'center',
  fontFamily: 'cursive'
}

class KennelCard extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <div style={bioContainer}>
            <div style={{display: 'table'}}>
              <div style={pictureWrapper}>
                <CardMedia style={cardMediaStyle}>
                  <img src="/assets/curly.jpg" alt="Description of cat" />
                </CardMedia>
                <CardTitle style={cardTitle} title="Curly" />
              </div>
              <AnimalBio/>
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
