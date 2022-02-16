import React, { Component } from 'react';
import '../style/home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="div-main"  id="home">
        <div className="div-principal">
          <div className="picture-profile"></div>
          <div className="box-about">
            <h2 className="about-title">Olá, eu sou a Carla!</h2>
            <p>Estudo programação há aproximadamente 1 ano e procuro pela minha primeira experiência profissional como Desenvolvedora Front-End Junior</p>
            <div className="skills">
              <i class="html5 big icon"></i>
              <i class="css3 alternate big icon"></i>
              <i class="js big icon"></i>
              <i class="react big icon"></i>
              <i class="docker big icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
