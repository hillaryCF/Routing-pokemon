import React, { Component } from 'react';

class PokeInfo extends Component {
  render(){
    const { match } = this.props;
    return(
      <React.Fragment>
        <h1>PokeInfo</h1>
        <p>{match.params.pokeindex}</p>
        <p>{match.params.pokeindex}</p>
        </React.Fragment>
    )
  }
}

export default PokeInfo;