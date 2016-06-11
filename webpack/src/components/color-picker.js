import React from 'react';
import { PhotoshopPicker } from 'react-color';

class ColorPicker extends React.Component {
  static propTypes = {
    color: React.PropTypes.shape({
      r: React.PropTypes.number,
      g: React.PropTypes.number,
      b: React.PropTypes.number
    }),
    colorChange: React.PropTypes.func
  }

  render() {
    const { color, colorChange } = this.props;
    return (<PhotoshopPicker color={ color } onChange={ colorChange } />);
  }
}

export default ColorPicker;