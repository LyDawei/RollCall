import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import AnimalInfo from './AnimalInfo';
import AnimalStory from './AnimalStory';
import CheckOutDialog from './CheckOutDialog';
import Polaroid from './Polaroid';
import './KennelCard.css';
import PropTypes from 'prop-types';

class KennelCard extends Component {
  render() {
    return (
      <Card className="kennel-card">
        <Polaroid 
          polaroidUrl={this.props.imageUrl}
          polaroidText={this.props.imageText}
          polaroidTitle={this.props.imageTitle}
        />
        <AnimalStory
          cardText={this.props.animalStory} />
        <AnimalInfo
          dateJoined={this.props.animalInfo.dateJoined}
          gender={this.props.animalInfo.gender}
          breed={this.props.animalInfo.breed}
          birthday={this.props.animalInfo.birthday}
          history={this.props.animalInfo.history}
          cats={this.props.animalInfo.preferences.cats}
          dogs={this.props.animalInfo.preferences.dogs}
          children={this.props.animalInfo.preferences.children}
          declawed={this.props.animalInfo.declawed}
          spayedOrNeutered={this.props.animalInfo.spayedOrNeutered}
          health={this.props.animalInfo.health}
          petId={this.props.animalInfo.petId}/>
        <CheckOutDialog />
      </Card>
    );
  }
}

KennelCard.PropTypes = {
  animalStory: PropTypes.string,
  animalInfo: PropTypes.object,
  imageUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  imageText: PropTypes.string
}

export default KennelCard;
