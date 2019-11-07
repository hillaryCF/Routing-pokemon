import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

export default () => {
  return(
    <div className="menu">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
      </ul>
      <form className="menu__form">
        <input type="search" id="search" name="search" className="menu__search"/>
        <button className="menu__search--btn"></button>
      </form>
  </div>
  )
}