import React, { Component } from 'react';
import Item from './Item';

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
    return this.state.items.map(({name, image}) =>
      <Item key={image} name={name} image={image} hide={ (i) => this.hide(i) } />
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
        { this.renderItems() }
      </div>
    );
  }
}

export default App;
