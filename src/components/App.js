import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

var style = {'float':'right'};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {

    //Hard coded values to showcase multiple animals
    var list = [];
    for (var i = 0; i < 20; i++) {
      list.push(<MenuItem>Cat {i}</MenuItem>);
    }

    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="Roll Call"
            onLeftIconButtonTouchTap={this.handleToggle}>
          </AppBar>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}>
            {list}
          </Drawer>

          <Card>
            <CardHeader
              title="Cookie"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src="images/nature-600-337.jpg" alt="Test" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <RaisedButton label="Action1" style={style}/>
              <RaisedButton label="Action2" style={style}/>
            </CardActions>
          </Card>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
