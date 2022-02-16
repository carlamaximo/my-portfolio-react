import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap/'
import '../style/projects.css';

export default class Projects extends Component {

  render() {
    return (
      <div className="div-principal-projetos" id="projects">
        <h2 className="project-title">Meus projetos</h2>
        <div className="box-all-projects">
        <Carousel>
          <Carousel.Item>
            <div className="box-project">
              <img
                className="d-block w-1 image-project"
                src={ 'https://user-images.githubusercontent.com/71015610/150001871-3cb31af2-b225-46e3-adea-793c117a0afe.png' }
                alt="First slide"
                width={400}
              />
              <Carousel.Caption>
                {/* <h4>Trybetunes</h4>
                <p className="description-project">descrição do projeto</p> */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
            <Carousel.Item>
              <div className="box-project">
              <img
                className="d-block w-10 image-project"
                src={ 'https://user-images.githubusercontent.com/71015610/150432797-afed9a6d-4825-4c1e-97f6-f975057b4a0e.png' }
                alt="Second slide"
                width={400}
              />
              <Carousel.Caption>
                {/* <h4>App de Receitas</h4>
                <p className="description-project">descrição do projeto</p> */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box-project">
              {/* <div className="d-block w-100 image-project"></div> */}
              <img
                className="d-block w-1 image-project"
                src={ 'https://user-images.githubusercontent.com/71015610/153540778-7c915be5-8734-4fcf-954b-0c8b27a183aa.png' }
                alt="third slide"
                width={400}
              />
              <Carousel.Caption>
                {/* <h4>Pixel Art</h4>
                <p className="description-project">Descrição do projeto</p> */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>   
          <Carousel.Item> 
            <div className="box-project">
              {/* <div className="d-block w-100 image-project"></div> */}
              <img
                className="d-block w-1 image-project"
                src={'https://user-images.githubusercontent.com/71015610/150037862-a6421f4c-6b51-4ec2-a8f3-7753405a65ff.png'}
                alt="trying sile"
                width={400}
              />
              <Carousel.Caption>
                {/* <h4>Star Wars</h4>
                <p className="description-project">descrição do projeto</p> */}
              </Carousel.Caption>
            </div>
        </Carousel.Item>   
        </Carousel>
        </div>
      </div>
    )
  }
};
