import React from 'react';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 c-image"
              src="https://images.unsplash.com/photo-1532289608746-8aaaa40620f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Renata</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 c-image"
              src="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Ricardo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 c-image"
              src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80"
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
        <style jsx>
          {`
            img {
              height: 90vh;
              object-fit: cover;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
