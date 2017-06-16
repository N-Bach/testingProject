import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAnimal, fetchAnimalPic } from '../../actions/animalActions';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import AnimalPic from './AnimalPic';

class AnimalPage extends Component {
  componentDidMount() {
    this.props.fetchAnimal();
  }

  // handleUpdateInput = e => {
  //   this.setState({
  //     animals: this.props.animal.filter(a => a.include(e))
  //   });
  // };

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    let pics = this.props.animalPic.length == 0
      ? 'No image'
      : this.props.animalPic.map(pic => (
          <img src={pic.url} width={200} height={200} />
        ));

    return (
      <div>
        <AutoComplete
          hintText="Type animal name"
          dataSource={this.props.animal}
          filter={AutoComplete.fuzzyFilter}
          onUpdateInput={e => this.setState({ query: e })}
        />
        <FlatButton
          label="Testing"
          primary
          onTouchTap={() => this.props.fetchAnimalPic(this.state.query)}
        />

        <div>
          {pics}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animal: state.animal,
    animalPic: state.animalPic
  };
};

const mapActionToProps = dispatch => {
  return {
    fetchAnimal: () => dispatch(fetchAnimal()),
    fetchAnimalPic: query => dispatch(fetchAnimalPic(query))
  };
};

export default connect(mapStateToProps, mapActionToProps)(AnimalPage);
