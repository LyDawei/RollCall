import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import KennelCard from './KennelCard';


const styles = {
  chip: {
    margin: 4,
    width: '96%'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {

    //Hard coded values to showcase multiple animals
    var list = [];
    for (var i = 0; i < 20; i++) {
      list.push(
        <Chip style={styles.chip} onClick={this.handleClose}>
          <Avatar src='/assets/curly.jpg' />Cat {i}
        </Chip>);
    }

    return (
      <MuiThemeProvider>
        <AppBar
          title="Adult Cat Room"
          onLeftIconButtonTouchTap={this.handleToggle}>
        </AppBar>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>
          {list}
        </Drawer>

        <KennelCard />

      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
