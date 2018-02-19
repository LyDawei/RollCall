import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
export default class Counter extends Component {
  render() {
    return (
      <Badge
        badgeContent={this.props.count}
        secondary={true}
        style={{'padding': '0px 15px 0px 0px'}}
      >
        <img height='55px' width='55px' src={this.props.image} />
      </Badge>
    )
  }
}

Counter.PropTypes = {
  count: PropTypes.number,
  image: PropTypes.string
};
