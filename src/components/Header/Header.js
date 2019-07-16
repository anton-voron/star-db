import React from 'react';

import { Link } from 'react-router-dom'

import './Header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
        <Link to="/">
          <h3>Star DB </h3>
        </Link>
      <ul className="d-flex">
        <li>
          <Link to="/peoples/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
      <button 
      className="btn btn-primary btn-sm"
      onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;