import React from 'react';
import ReactDOM from 'react-dom';
import BulbPanel from './components/bulb-panel';

import Lifx from './lib/lifx';

class App extends React.Component {
  lifx = new Lifx();

  state = {
    bulbs: []
  }

  componentDidMount() {
    this.reloadBulbs()
  }

  updateBulb = (bulb, rgb) => {
    this.lifx.updateBulbColorRGB(bulb.id, rgb)
  }

  reloadBulbs() {
    console.log('reloading bulbs')
    this.lifx.loadBulbs(data => this.setState({bulbs: data}))
  }

  render() {
    const bulbs = this.state.bulbs;
    const panels = bulbs.map((bulb, index) => {
      return (<BulbPanel
                bulb={bulb}
                key={`bulb-${index}`}
                changeBulb={this.updateBulb} />
              );
    });
    
    return (
      <div>
        <h1>LIFX Control Panel</h1>
        <div>{panels}</div>
      </div>
    );
  }
}


console.log("top-level render")
ReactDOM.render(<App/>, document.body);
// ReactDOM.render(<App/>, document.getElementById("app"));