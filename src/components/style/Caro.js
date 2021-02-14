import React from "react";
import { Carousel } from "react-bootstrap";

function Caro() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://image.winudf.com/v2/image/Y29tLndoYXRzdXAuU3RyZWV0RmFzaGlvbl9zY3JlZW5fM18xNTM2MTAxMzg5XzAxNA/screen-3.jpg?fakeurl=1&type=.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-elVXA7oUpf8/UNhacHuWDTI/AAAAAAAAAJE/yr0Lo3UuMVI/s1600/moschino-mens-fall-winter-autumn-2010-fw10-aw10.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-L97cZuv_LLY/UNhaqnfVlOI/AAAAAAAAAJM/54IGAqd-0n8/s1600/Men%E2%80%99s-winter-fashion-latest-fashion-fashion-news-fashion-magazine-fashion-updates-winter-fashion1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;
