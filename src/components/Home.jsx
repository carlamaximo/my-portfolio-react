import React, { Component } from 'react';
import '../style/home.css';
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import { GrMysql } from "@react-icons/all-files/gr/GrMysql";

export default class Home extends Component {
  // constructor() {
  //   super();
    
  //   function dinamicText() {
  //     // const textArr = ['O', 'l', 'á',',', ' ', 'm', 'e', 'u',' ', 'n', 'o', 'm', 'e', ' ', 'é', ' ', 'C', 'a', 'r', 'l', 'a'];
  //     // setTimeout(() => {
  //     //   console.log('running') 
  //     //   return (<h1>qualquer coisa</h1>)
  //     // }, 1000);
  //     return <h1>HEY!</h1>
  // }
  // componentDidMount() {
  //   this.dinamicText()
  // }
  // }
  render() {
    return (
      <div className="div-main"  id="home">
        <div className="div-principal">
          <div className="picture-profile"></div>
          <div className="box-about">
            <h2 className="about-title">Olá, eu sou a Carla!</h2>
            {/* { this.dinamicText()} */}
            <p className="p-home">Estudo programação há aproximadamente 1 ano e procuro pela minha primeira experiência profissional como Desenvolvedora Front-End Junior</p>
            <div className="skills">
              <AiFillHtml5 className="skill-item"/>
              <IoLogoCss3 className="skill-item"/>
              <SiJavascript className="skill-item"/>
              <FaReact className="skill-item"/>
              <FaDocker className="skill-item"/>
              <GrMysql className="skill-item"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
