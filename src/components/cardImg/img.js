import React from 'react';
import BtnStart from '../startBtn/startBtn';
import {Link} from 'react-router-dom';
import './img.css';

export default ({namecard ,imageUrl,name,to}) =>
<div className="container">
  <h2 className="title">{name}</h2>
  <Link to={to} className="card" >
    <img alt={namecard} src={imageUrl} />
  </Link>
  <BtnStart />
</div>

