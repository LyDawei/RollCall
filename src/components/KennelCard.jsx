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
          cardText={this.props.animal.animalStory} />
        <AnimalInfo
          dateJoined={this.props.animal.animalInfo.dateJoined}
          gender={this.props.animal.animalInfo.gender}
          breed={this.props.animal.animalInfo.breed}
          birthday={this.props.animal.animalInfo.birthday}
          history={this.props.animal.animalInfo.history}
          cats={this.props.animal.animalInfo.preferences.cats}
          dogs={this.props.animal.animalInfo.preferences.dogs}
          children={this.props.animal.animalInfo.preferences.children}
          declawed={this.props.animal.animalInfo.declawed}
          spayedOrNeutered={this.props.animal.animalInfo.spayedOrNeutered}
          health={this.props.animal.animalInfo.health}
          petId={this.props.animal.animalInfo.petId}/>
        <CheckOutDialog 
          petId={this.props.animal.animalInfo.petId}
          roomId={2}
        />
      </Card>
    );
  }
}

KennelCard.PropTypes = {
  animal: PropTypes.object,
  imageUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  imageText: PropTypes.string
}

export default KennelCard;
