import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import KennelCard from './KennelCard';
import './App.css';

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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({open: false});
  
  // TODO: along with the skeleton we have, we need to add some functionality so that
  //       selecting a specific Cat would pull up that cat's information. For now we have dummy info but that should be functional
  //       for easier integration.
  // TODO: Break up components even further. This is too complex.
  render() {

    //Hard coded values to showcase multiple animals
    var list = [];
    for (var i = 0; i < 20; i++) {
      list.push(
        <Chip style={styles.chip} onClick={this.handleClose}>
          <Avatar src='/assets/curly.jpg'/>Cat {i}
        </Chip>);
    }

    return (
      <div className="app">
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

          <KennelCard/>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
