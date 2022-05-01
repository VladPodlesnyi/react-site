import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import A1 from '../Assets/A1.jpg'
import A2 from '../Assets/A2.jpg'
import A3 from '../Assets/A3.jpg'
import A4 from '../Assets/A4.jpg'



export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className='d-flex flex-column m-2'>
                <Carousel.Item>
                    <img
                        className='rounded mx-auto d-block w-100 h-100'
                        src={A1}
                        alt="..."
                        height="700"
                        width="700"

                    />
                    <Carousel.Caption>
                        <h3>Ja Ukrainec</h3>
                        <p>CREATIVE STUDIO "Mikrus Prod Co"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='rounded mx-auto d-block w-100 h-100'
                        src={A2}
                        alt="..."
                        height="700"
                        width="700"
                    />
                    <Carousel.Caption>
                        <h3>Deadline jest` deadline</h3>
                        <p>CREATIVE STUDIO "Mikrus Prod Co"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='rounded mx-auto d-block w-100 h-100'
                        src={A3}
                        alt="..."
                        height="700"
                        width="700"
                    />
                    <Carousel.Caption>
                        <h3>Ne nu a hule jemu nie verit`</h3>
                        <p>CREATIVE STUDIO "Mikrus Prod Co"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='rounded mx-auto d-block w-100 h-100'
                        src={A4}
                        alt="..."
                        height="700"
                        width="1000"
                    />
                    <Carousel.Caption>
                        <h3>Ja natural</h3>
                        <p>CREATIVE STUDIO "Mikrus Prod Co"</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

