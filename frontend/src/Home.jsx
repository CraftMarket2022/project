import React from 'react'

import brass from './assets/img/brass.jpg';
import pottery from './assets/img/pottery.jpg';
import loom from './assets/img/loom.jpg';

import { Carousel } from 'react-bootstrap';

import './Home.css'

export const Home = () => {
    return (
        <Carousel className='carousel'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={pottery}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={loom}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={brass}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
