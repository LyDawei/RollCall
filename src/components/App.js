import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

// import logo from './logo.svg';
// import './App.css';
const style = {
  display: 'inline-block',
  margin: '0 32px 16px 0',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="Roll Call"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          
          <Drawer 
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
