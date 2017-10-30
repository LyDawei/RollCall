import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

var cardStyle={
  width:'100%',
  float:'left',
  'background-color': '#f6f7f9'
  // margin: '1% 1% 1% 1%'
};

var cardMediaStyle = {
  width:'100%',
  height:'auto',
};

var pictureWrapper = {
  'background-color': '#fff',
  margin: '10px',
  border: '4px solid #fff',
  'border-style': 'solid',
  'border-radius': '2px',
  width: '160px',
  display: 'inline-block'
};

var animalBio = {
  display: 'inline-block'
};

class KennelCard extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <Card style={cardStyle}>
            <div style={pictureWrapper}>
              <CardMedia style={cardMediaStyle}>
                <img src="/assets/curly.jpg" alt="Description of cat" />
              </CardMedia>
            </div>
            <aside style={animalBio}>
                <div>

                </div>
            </aside>
            
            <CardTitle title="Curly"/>
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
