import React from 'react';
import ColorPicker from './color-picker';

class BulbPanel extends React.Component {

  static propTypes = {
    bulb: React.PropTypes.node,
    changeBulb: React.PropTypes.func
  }

  state = {
    color: {
      r: 120,
      g: 0,
      b: 0
    }
  };

  colorChange = (color) => {
    this.props.changeBulb(this.props.bulb, color.rgb)
  }

  render() {
    const { bulb } = this.props;
    console.log(bulb);
    return (
      <div>
        <h2>{bulb.location.name}: {bulb.label}</h2>
        <ColorPicker color={this.state.color} colorChange={this.colorChange} />
      </div>
    );
  }
}

export default BulbPanel;