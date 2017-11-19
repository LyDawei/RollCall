import React, { Component } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import './Polaroid.css';
import PropTypes from 'prop-types';

export default class Polaroid extends Component {
  render() {
    return (
      <div className="polaroid-wrapper column-left">
        <CardMedia className="polaroid-image">
          <img src={this.props.polaroidUrl} alt={this.props.polaroidText} />
        </CardMedia>
        <CardTitle className="polaroid-title" title={this.props.polaroidTitle} />
      </div>
    );
  }
}

Polaroid.PropTypes = {
  polaroidUrl: PropTypes.string,
  polaroidText: PropTypes.string,
  polaroidTitle: PropTypes.string
}
