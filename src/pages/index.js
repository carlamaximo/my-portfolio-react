import React, { Component } from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';

export default class Principal extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    )
  }
};
