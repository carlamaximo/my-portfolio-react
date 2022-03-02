import React, { Component } from 'react';
import '../style/header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="name-heart">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path className="icon-heart" d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
            </svg>
            <h2 className="header-name">Carla Máximo</h2>
          </div>
          <nav className="menu">
            <a className="menu-item" href="#home">Home</a>
            <a className="menu-item" href="#about">Sobre mim</a>
            <a className="menu-item" href="#projects">Projetos</a>
            <a className="menu-item" href="#bottom">Contato</a>
          </nav>
        </header>
      </div>
    )
  }
};
