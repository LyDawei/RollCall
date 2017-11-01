import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AnimalBio from './AnimalBio';

var cardStyle = {
  width: '100%',
  float: 'left',
  'background-color': '#f6f7f9'
  // margin: '1% 1% 1% 1%'
};

var cardMediaStyle = {
  width: '100%',
  height: 'auto',
  display: 'table-cell'
};

var pictureWrapper = {
  'background-color': '#fff',
  margin: '10px',
  'margin-right': '20px',
  border: '4px solid #fff',
  'border-style': 'solid',
  'border-radius': '2px',
  width: '300px',
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
            
              <div style={pictureWrapper}>
                <CardMedia style={cardMediaStyle}>
                  <img src="/assets/curly.jpg" alt="Description of cat" />
                </CardMedia>
              </div>
              <AnimalBio/>
            </div>
          </div>
          <CardTitle title="Curly" />
          <CardText>
            The animal's short story should go here!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default KennelCard;
