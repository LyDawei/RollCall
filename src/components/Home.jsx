import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAnimalList, fetchAnimal } from '../actions/animal-actions.js';

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
      open: true
    };
  }

  componentDidMount() {
    this.props.fetchAnimalList();
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  };

  handleClose(pk) {
    this.props.fetchAnimal(pk);
    this.setState({ open: false });
  }

  getOccupants() {
    let list = [];
    if (this.props.cats.length) {
      if (list) {
        for (var i = 0; i < this.props.cats.length; i++) {
          list.push(
            <Chip style={styles.chip} onClick={this.handleClose.bind(this, this.props.cats[i].pk)}>
              {this.props.cats[i].fields.name}
            </Chip>);
        }
      }
    }
    return list;
  }

  renderLanding() {
    return <div>Please select an animal from the drawer.</div>
  }

  renderKennelCard() {
    let kennelCardInfo = this.props.currentAnimal;

    return <KennelCard
      animalInfo={kennelCardInfo.animalInfo}
      animalStory={kennelCardInfo.animalStory}
      imageText={kennelCardInfo.polaroid.imageText}
      imageTitle={kennelCardInfo.polaroid.imageTitle}
      imageUrl={kennelCardInfo.polaroid.imageUrl}
    />;
  }

  render() {

    //Hard coded values to showcase multiple animals
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
          {this.getOccupants()}
        </Drawer>

        {this.props.currentAnimal ? this.renderKennelCard() : this.renderLanding()}


      </MuiThemeProvider>
    );
  }
}

Home.PropTypes = {
  cats: PropTypes.array
};


//---------------Redux Stuff------------------
const mapStateToProps = state => {
  return {
    cats: state.animalReducer.cats,
    currentAnimal: state.animalReducer.currentCat
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchAnimalList: () => dispatch(fetchAnimalList()),
    fetchAnimal: (pk) => dispatch(fetchAnimal(pk))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
