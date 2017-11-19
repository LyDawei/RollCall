import React, {Component} from 'react';
import CardText from 'material-ui/Card/CardText'
import PropTypes from 'prop-types';
import './AnimalStory.css';

export default class AnimalStory extends Component {
  render(){
    return(
      <div className="column-middle">
        <CardText>
          <h3 style={{textAlign: 'center'}}>My Story</h3>
          <div className="story-wrapper">
            <p>{this.props.cardText}</p>
          </div>
        </CardText>
      </div>
    );
  }
}

AnimalStory.propTypes = {
  cardText: PropTypes.string
};
