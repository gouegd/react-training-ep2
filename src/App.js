import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item';
import { getCategory } from './actions/imageActions';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // init state with an items array
    this.state = {
      items: []
    };
  }

  // before mounting grab silly cat pictures and eventually put relevant info in the state's items array
  componentWillMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    .then(res => res.json())
    .then(json => {
      this.setState({ items: json.data.map(d => ({name: d.slug, image: d.images.fixed_height.url})) });
    });
  }

  renderItems() {
    const { items } = this.state;
    const { category } = this.props.images;
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
        <button onClick={ () => this.props.actions.getCategory('pukekos') }>I want pukekos</button>
        { this.renderItems() }
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({ images })

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getCategory }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
