import React from 'react';
import Nav from '../components/navigation/nav';
import Fetch from '../services/fetch';

export default () => {
  return(
    <React.Fragment>
      <Nav/>
      <Fetch/>
    </React.Fragment>
  )
}