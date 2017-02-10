import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item';
import { setCategory, receiveImages } from './actions/imageActions';

import './App.css';

const onCategoryChange = (props, category) => {
  props.actions.setCategory(category);
  props.actions.receiveImages(category);
}

class App extends Component {
  // before mounting grab silly cat pictures and eventually put relevant info in the state's items array
  componentWillMount() {
    this.props.actions.receiveImages(this.props.images.category);
  }

  renderItems() {
    const { category, items = [] } = this.props.images;
    return (
      <div>
        <h3>{ category ? `Here are some ${category}` : 'No category chosen'}</h3>
        { items.map(({name, image}) =>
          <Item key={image} name={name} image={image} hide={ (i) => this.hide(i) } />
        )}
      </div>
    );
  }

  // update the items by removing a given image
  hide(url) {
    this.setState({
      items: this.state.items.filter(item => item.image !== url)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://tichaposta.eu/catweb/catlogo.png" className="App-logo" alt="logo" />
          <h2>Welcome to ReCAT</h2>
        </div>
        <p className="App-intro">
          To keep going, edit <code>src/*</code> and save to reload.
        </p>
        <button onClick={ () => onCategoryChange(this.props, 'pikachu') }>I want pukekos</button>
        { this.renderItems() }
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({ images })

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setCategory, receiveImages }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
