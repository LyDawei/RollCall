import React, { Component } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import './Polaroid.css';
export default class Polaroid extends Component {
  render() {
    return (
      <div className="polaroid-wrapper column-left">
        <CardMedia className="polaroid-image">
          <img src="/assets/curly.jpg" alt="Description of cat" />
        </CardMedia>
        <CardTitle className="polaroid-title" title="Curly" />
      </div>
    );
  }
}
