import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './CheckOutDialog.css';

export default class CheckOutDialog extends Component {
  render() {
    return (
      <div class="checkout-button">
        <RaisedButton primary={true} label='Check Out' />
      </div>
    );
  }
}
