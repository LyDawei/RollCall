import React, { Component } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import './Polaroid.css';
export default class Polaroid extends Component {
  render() {
    return (
      <div class="polaroid-wrapper column-left">
        <CardMedia class="polaroid-image">
          <img src="/assets/curly.jpg" alt="Description of cat" />
        </CardMedia>
        <CardTitle class="polaroid-title" title="Curly" />
      </div>
    );
  }
}
