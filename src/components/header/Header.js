import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {


  render() {
    return (
      <header id="header">
        <h1>Budget Maker</h1>
        <nav>
          <ul>
            <li><Link to="/">Placeholder</Link></li>
            <li><Link to="/">Placeholder</Link></li>
            <li><Link to="/">Placeholder</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
