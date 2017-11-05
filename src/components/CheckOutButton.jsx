import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class CheckOutButton extends Component {
  render() {
    return (
      <div>
        <RaisedButton primary={true} label='Check Out' />
      </div>
    );
  }
}
