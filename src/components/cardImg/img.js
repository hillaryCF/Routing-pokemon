import React from 'react';
import BtnStart from '../startBtn/startBtn';
import './img.css';

export default ({namecard ,imageUrl,name}) =>
<div className="container">
  <h2 className="title">{name}</h2>
  <button className="card">
  <img alt={namecard} src={imageUrl}/>
  </button>
  <BtnStart />
</div>

