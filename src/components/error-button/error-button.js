import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  onButtonError = () => {
    this.setState({
      renderError: true,
    })
  }

  render() {

    const { renderError } = this.state;

    if (renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.onButtonError()}>
        Throw Error
      </button>
    );
  }
}
