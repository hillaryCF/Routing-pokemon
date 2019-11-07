import React, { Component } from 'react';
import './startBtn.css';


class BtnStart extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <button className={this.state.active ? " switch-on" : " switch-off"}
        onClick={() => this.setState({ active: !this.state.active })}>
      </button>
    )
  }
}

export default BtnStart;