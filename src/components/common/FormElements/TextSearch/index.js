import { HTMLInputTypeAttribute } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { Component } from 'react';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class TextSearch extends Component {
  state = {
    value: '',
  };

  timer = null;

  handleChange = (e) => {
    clearTimeout(this.timer);
    this.setState({ value: e.target.value });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    const { value } = this.state;
    this.props.onChange(value);
  };

  render() {
    const {
      type,
      className = '',
      placeholder = 'Search',
      ...rest
    } = this.props;

    return (
      <input
        {...rest}
        type={type}
        className={className}
        placeholder={placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default TextSearch;
