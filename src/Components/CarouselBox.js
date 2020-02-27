import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselItem from "react-bootstrap/CarouselItem";

import mountain from "../assets/mountain.jpeg"
import forest from "../assets/forest.jpeg";
import rocks from "../assets/rocks.jpeg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={mountain} alt="mountain" />
          <CarouselCaption>
            <h3>Mountain image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={forest} alt="mountain" />
          <CarouselCaption>
            <h3>Forest image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={rocks} alt="mountain" />
          <CarouselCaption>
            <h3>Rocks image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    );
  }
}
